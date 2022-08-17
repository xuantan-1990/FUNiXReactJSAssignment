import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";

export default class Departments extends Component {
  render() {
    const Depart = this.props.departments.map((department) => {
      return (
        <div key={department.id} className="col-12 col-md-6 col-xl-4 mb-3">
          <Card>
            <CardTitle className="AppLeft ml-1">
              <h2>{department.name}</h2>
            </CardTitle>
            <CardTitle className="AppLeft ml-5">
              Số lượng nhân viên: {department.numberOfStaff}
            </CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container col-9">
        <div className="row">{Depart}</div>
      </div>
    );
  }
}
