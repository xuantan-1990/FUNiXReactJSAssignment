import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'reactstrap'
import dateFormat from "dateformat"; 
import { COLUMNS } from "../shared/column";


class Staffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedEmployee: null,
          selectedCol: COLUMNS,
        };
  }
  
  onSelect(staff) {
    this.setState({selectedEmployee: staff})
  }
 
  renderCols() {
    
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
    const cols = this.state.selectedCol.map((col) => {
      return (
        <div>
          <div>
            <Button color="success" className="my-2 m-1">
              <h4> {col.name} </h4>
            </Button>
          </div>
        </div>
      );
    });
        const staffs = this.props.staffsList.map((staff) => {
          return (
              <div
                key={staff.id}
                className="col-12 col-md-6 col-xl-4"
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
            <div className="row">{cols}</div>
            <div className="row">{staffs}</div>
            <div className="row">
              {this.renderEmployee(this.state.selectedEmployee)}
            </div>
          </div>
        );
    }
}

export default Staffs