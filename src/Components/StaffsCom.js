import React,{Component} from 'react';
import { Form, Button, Modal, ModalHeader, ModalBody, Label, Col, FormFeedback, Row, Input } from 'reactstrap';
import { RenderStaffItem } from './StaffDetailCom';
  

export default class Staffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salaryScale: 1,
      annualLeave: 0,
      overTime: 0,
      doB: "",
      startDate: "",
      department: "",
      image:'/assets/images/alberto.png',
      touched: {
        doB: false,
        startDate: false,
        name: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
        department: false,
      },
      nameF: "",
      modalOpen: false,
    };
    this.timNhanVien = this.timNhanVien.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  timNhanVien(event) {
    event.preventDefault();
    this.setState({ nameF: event.target.nameS.value });
  }

  // thay đổi trạng thái của touched từ false => true khi click vào vùng input
  handleBlur = (field) => (event) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };

  // thay đổi trạng thái dữ liệu của các trường trong state
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

    handleSubmit(event)  {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    
    const newStaff = {
      name: this.state.name,
      salaryScale: this.state.salaryScale,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      doB: this.state.doB,
      startDate: this.state.startDate,
      department: this.state.department,
      image: this.state.image
    };
    this.props.onAdd(newStaff)
    console.log(newStaff);
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  validate(
    name,
    salaryScale,
    annualLeave,
    overTime,
    doB,
    startDate,
    department
  ) {
    const errors = {
      name: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
      doB: "",
      startDate: "",
      department: "",
    };
    if (this.state.touched.name && name.length < 3)
      errors.name = "Should be >=3 characters";
    else if (this.state.touched.name && name.length > 10)
      errors.name = "Should be <=10 characters";

    if (this.state.touched.salaryScale && salaryScale.length < 1)
      errors.salaryScale = "Yêu cầu cập nhật!";

    if (this.state.touched.annualLeave && annualLeave.length < 1)
      errors.annualLeave = "Yêu cầu cập nhật!";

    if (this.state.touched.overTime && overTime.length < 1)
      errors.overTime = "Yêu cầu cập nhật!";

    if (this.state.touched.doB && doB.length < 1)
      errors.doB = "Yêu cầu cập nhật!";

    if (this.state.touched.startDate && startDate.length < 1)
      errors.startDate = "Yêu cầu cập nhật!";

    if (this.state.touched.department && department.length < 1)
      errors.department = "Yêu cầu cập nhật!";

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime,
      this.state.doB,
      this.state.startDate,
      this.state.department
    );

    const Staffs = this.props.staffs
      .filter((val) => {
        //điều kiện this.state.nameF === '' render toàn bộ nhân viên khi ko có nhập ô tìm kiếm
        if (this.state.nameF === "") return val;
        //tìm kiếm nhân viên theo tên
        else if (
          val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
        )
          return val;
        return 0;
      })
      .map((val) => {
        return (
          <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={val.id}>
            <RenderStaffItem staff={val} />
          </div>
        );
      });

    //chỉ render toàn bộ nhân viên
    //     const Staffs = this.props.staffs.map(staff => {
    //   return (
    //     <div key={staff.id} className="col-6 col-md-4 col-xl-2 mb-3">
    //       <Card>
    //         <Link to={`/nhanvien/${staff.id}`}>
    //           <CardImg width="100%" src={staff.image} alt={staff.name} />
    //           <CardBody>
    //             <CardTitle>{staff.name}</CardTitle>
    //           </CardBody>
    //         </Link>
    //       </Card>
    //     </div>
    //   );
    // })
    return (
      <div className="container col-9">
        <div className="row m-1">
          <div className="col-12 col-md-5 mt-3 mr-5">
            <div className="row">
              <div className="col-8 col-md-8">
                <h2>Nhân Viên</h2>
              </div>
              <div className="col-4 col-auto">
                {/* Nút thêm nhân viên */}
                <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-plus fa-lg"></span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <Form onSubmit={this.timNhanVien} className="form-group row mt-3">
              <div className="col-8 col-md-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="tìm kiếm nhân viên"
                  name="nameS"
                />
              </div>
              <div className="col-4 col-auto">
                <Button className="btn btn-success" type="submit">
                  Tìm
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <hr />
        <div className="row">{Staffs}</div>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Cập nhật nhân viên
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Name
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onBlur={this.handleBlur("name")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  salaryScale
                </Label>
                <Col md={8}>
                  <Input
                    type="number"
                    name="salaryScale"
                    id="salaryScale"
                    placeholder="Number"
                    value={this.state.salaryScale}
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                    onBlur={this.handleBlur("salaryScale")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  annualLeave
                </Label>
                <Col md={8}>
                  <Input
                    type="number"
                    name="annualLeave"
                    id="annualLeave"
                    value={this.state.annualLeave}
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  overTime
                </Label>
                <Col md={8}>
                  <Input
                    type="number"
                    name="overTime"
                    id="overTime"
                    value={this.state.overTime}
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                    onBlur={this.handleBlur("overTime")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.overTime}</FormFeedback>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  doB
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    name="doB"
                    id="doB"
                    value={this.state.doB}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  startDate
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={this.state.startDate}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="department" md={4}>
                  department
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="department"
                    id="department"
                    value={this.state.department}
                    valid={errors.department === ""}
                    invalid={errors.department !== ""}
                    onBlur={this.handleBlur("department")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.department}</FormFeedback>
                </Col>
              </Row>
            <Button type="submit" color="primary">
              Thêm
            </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}