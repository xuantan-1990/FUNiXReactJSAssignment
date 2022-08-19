import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

class RenderDeparts extends Component {
  render() {
    return (
      <Link to={`/phongban/${this.props.depart.id}`}>
        <div>
          <Card>
            <CardTitle className="AppLeft ml-1">
              <h2>{this.props.depart.name}</h2>
            </CardTitle>
            <CardTitle className="AppLeft ml-5">
              Số lượng nhân viên: {this.props.departStaffNo.length}
            </CardTitle>
          </Card>
        </div>
      </Link>
    );
  }
}

export default class Departments extends Component {
  render() {
    const Depart = this.props.departments.map((department) => {
      return (
        <div key={department.id} className="col-12 col-md-5 col-xl-3 m-3">
          <RenderDeparts depart={department} departStaffNo={this.props.staffs.filter(staff => 
            staff.departmentId === department.id
          )} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{Depart}</div>
      </div>
    );
  }
}
   


