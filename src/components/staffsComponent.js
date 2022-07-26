import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'reactstrap'
import dateFormat from "dateformat"; 


class Staffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedEmployee: null,
          selectedCol: "col-12 col-md-6 col-xl-4",
        };
  }
  
  onSelect(staff) {
    this.setState({selectedEmployee: staff})
  }
 
  onSelectCol(col) {
    this.setState({ selectedCol: col });
  }
 
  renderEmployee(staff) {
    if (staff != null) {
      return (
        <Row className="col-12 col-md-12 col-xl-12">
          <div className="col-12 col-md-6 col-xl-6">
            <img
              width="100%"
              float="right"
              src={staff.image}
              alt={staff.name}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-6">
            <h3>Họ và tên: {staff.name}</h3>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p>Số ngày đã làn thêm: {staff.overTime}</p>
          </div>
        </Row>
      );
    } else {
      return (
        <h4>Bấm vào tên nhân viên để xem thông tin.</h4>
      );
    }
  }
  render() {
        const staffs = this.props.staffsList.map((staff) => {
          return (
            <div
              key={staff.id}
              className={this.state.selectedCol}
              onClick={() => this.onSelect(staff)}
            >
              <Row>
                <Card
                  className="my-2"
                  color="primary"
                  outline
                  style={{
                    width: "90%",
                  }}
                >
                  <Col>
                    <h4>{staff.name}</h4>
                  </Col>
                </Card>
              </Row>
            </div>
          );
        });
        return (
          <div className="container">
               <div className="row">
              <Button
                color="success"
                className="my-2 m-1"
                onClick={() => this.onSelectCol("col-12 col-md-12 col-xl-12")}
              >
                <h4> 1 cột </h4>
              </Button>
              <Button
                color="success"
                className="my-2 m-1"
                onClick={() => this.onSelectCol("col-12 col-md-6 col-xl-6")}
              >
                <h4> 2 cột </h4>
              </Button>
              <Button
                color="success"
                className="my-2 m-1"
                onClick={() => this.onSelectCol("col-12 col-md-6 col-xl-3")}
              >
                <h4> 4 cột </h4>
              </Button>
              <Button
                color="success"
                className="my-2 m-1"
                onClick={() => this.onSelectCol("col-12 col-md-6 col-xl-2")}
              >
                <h4> 6 cột </h4>
              </Button>
            </div>
            <div className="row">{staffs}</div>
            <div className="row">
              {this.renderEmployee(this.state.selectedEmployee)}
            </div>
          </div>
        );
    }
}

export default Staffs