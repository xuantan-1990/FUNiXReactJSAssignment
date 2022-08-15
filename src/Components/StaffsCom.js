import React,{Component} from 'react';
import { Form, Button, Modal, ModalHeader, ModalBody, Label, Col, FormFeedback, Row, Input } from 'reactstrap';
import { RenderStaffItem } from './StaffDetailCom';
import { Control, LocalForm, Errors } from "react-redux-form";
import { DEPARTMENTS } from '../shared/staffs';
// import { addStaff } from '../redux/ActionCreators';
  
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

export default class Staffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
      modalOpen: false,
    };
    this.timNhanVien = this.timNhanVien.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  timNhanVien(event) {
    event.preventDefault();
    this.setState({ nameF: event.target.nameS.value });
  }

  // thay đổi trạng thái của touched từ false => true khi click vào vùng input
  // handleBlur = (field) => (event) => {
  //   this.setState({ touched: { ...this.state.touched, [field]: true } });
  // };

  // thay đổi trạng thái dữ liệu của các trường trong state
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(values) {
    const department= values.department === "Sale"? DEPARTMENTS[0]: values.department === "HR"? DEPARTMENTS[1]: values.department === "Marketing"? DEPARTMENTS[2]:values.department === "IT"? DEPARTMENTS[3] :  DEPARTMENTS[4] 
   
    console.log(department);
      console.log(values.department);
    // const newStaff = {
    //   name: values.name,
    //   salaryScale: values.salaryScale,
    //   annualLeave: values.annualLeave,
    //   overTime: values.overTime,
    //   doB: values.doB,
    //   startDate: values.startDate,
    //   department: values.department,
    //   image: "/assets/images/alberto.png",
    // };
    this.props.addStaff(
      values.name,
      values.salaryScale,
      values.annualLeave,
      values.overTime,
      values.doB,
      values.startDate,
      department,
     "/assets/images/alberto.png"
    );
    
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
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
                <Button
                  outline
                  onClick={this.toggleModal}
                  // addStaff={addStaff}
                >
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
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Name
                </Label>
                <Col md={8}>
                  <Control.text
                    id="name"
                    name="name"
                    placeholder="Name"
                    model=".name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  salaryScale
                </Label>
                <Col md={8}>
                  <Control.text
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="salaryScale"
                    model=".salaryScale"
                    className="form-control"
                    defaultValue="1"
                    validators={{
                      required,
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  annualLeave
                </Label>
                <Col md={8}>
                  <Control.text
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="annualLeave"
                    model=".annualLeave"
                    className="form-control"
                    defaultValue="0"
                    validators={{
                      required,
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  overTime
                </Label>
                <Col md={8}>
                  <Control.text
                    id="overTime"
                    name="overTime"
                    placeholder="overTime"
                    model=".overTime"
                    className="form-control"
                    defaultValue="0"
                    validators={{
                      required,
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  doB
                </Label>
                <Col md={8}>
                  <Control.text
                    type="date"
                    id="doB"
                    name="doB"
                    placeholder="doB"
                    model=".doB"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  startDate
                </Label>
                <Col md={8}>
                  <Control.text
                    type="date"
                    id=" startDate"
                    name="startDate"
                    placeholder="startDate"
                    model=".startDate"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="department" md={4}>
                  department
                </Label>
                <Col md={8}>
                  <Control.select
                    id="department"
                    name="department"
                    placeholder="department"
                    model=".department"
                    className="form-control"
                    defaultValue="Sale"
                    // validators={{
                    //   required,
                    //   minLength: minLength(3),
                    //   maxLength: maxLength(10),
                    // }}
                  >
                    <option >Sale</option>
                    <option >HR</option>
                    <option >Marketing</option>
                    <option >IT</option>
                    <option >Finance</option>
                  </Control.select>
                  {/* <Errors
                    className="text-danger"
                    model=".department"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  /> */}
                </Col>
              </Row>
              <Row className="form-group">
                <Button type="submit" color="primary">
                  Thêm
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}