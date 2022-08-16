import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export default class Departments extends Component {
  
  render() {
    const Depart = this.props.departments.map((department) => {
      return (
        <Link to={`/phongban/${department.id}`}>
          <div
            key={department.id}
            className="col-12 col-md-12 col-xl-12 m-3"
          >
            <Card>
              <CardTitle className="AppLeft ml-1">
                <h2>{department.name}</h2>
              </CardTitle>
              <CardTitle className="AppLeft ml-5">
                Số lượng nhân viên: {department.numberOfStaff}
              </CardTitle>
            </Card>
          </div>
        </Link>
      );
    });
    return (
      <div className="container col-9 col-md-8 col-lg-7">
        <div className="row">{Depart}</div>
      </div>
    );
  }
}
