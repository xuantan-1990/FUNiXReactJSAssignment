import React, { Component } from "react";
import {
  Card,
  CardTitle,
} from "reactstrap";

export default class Departments extends Component {
  render() {
    const Depart = this.props.departments.map((department) => {
      return (
        <div key={department.id} className="col-6 col-md-4 col-xl-2 mb-3">
          <Card>
            <CardTitle>{department.name}</CardTitle>
            <CardTitle>{department.numberOfStaff}</CardTitle>
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