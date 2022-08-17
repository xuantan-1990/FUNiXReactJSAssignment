import React,{Component} from 'react';
import { Card, Button, Modal, ModalHeader, ModalBody, Label, Col, CardBody, CardImg, CardSubtitle, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
  
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

export const RenderStaffItem = ({ staff }) => {

  return (
    <div>
      <Link to={`/nhanvien/${staff.id}`}>
        <Card>
          <CardImg src={staff.image} alt={staff.name} />
          <CardBody>
            <CardSubtitle>{staff.name}</CardSubtitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};
export default class Staffs extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
      modalOpen: false,
    };
    this.timNhanVien = this.timNhanVien.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  
  }

  timNhanVien(event) {
    event.preventDefault();
    this.setState({ nameF: event.target.nameS.value });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(values) {
    const departmentId =
      values.departmentId === "Sale"
        ? "Dept01"
        : values.departmentId === "HR"
        ? "Dept02"
        : values.departmentId === "Marketing"
        ? "Dept03"
        : values.departmentId === "IT"
        ? "Dept04"
        : "Dept05"
                
    this.props.postStaff(
      values.name,
      values.salaryScale,
      values.annualLeave,
      values.overTime,
      values.doB,
      values.startDate,
      departmentId,
     "/assets/images/alberto.png"
    );
    
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const staffs = this.props.staffs
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
            <LocalForm
              onSubmit={(value) => this.timNhanVien(value)}
              className="form-group row mt-3"
            >
              <div className="col-8 col-md-8">
                <Control.text
                  id="name"
                  name="name"
                  placeholder="Name"
                  model=".name"
                  className="form-control"
                />
              </div>
              <div className="col-4 col-auto">
                <Button className="btn btn-success" type="submit">
                  Tìm
                </Button>
              </div>
            </LocalForm>
          </div>
        </div>
        <hr />
        <div className="row">{staffs}</div>
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
                    model=".departmentId"
                    className="form-control"
                    defaultValue="Sale"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
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