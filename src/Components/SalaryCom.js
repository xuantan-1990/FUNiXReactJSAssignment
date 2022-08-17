import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const luongCB = 3000000;
const luongTC = 200000;
function RenderSalary({ salary, sumSalary }) {
  return (
    <div className="container">
      <Card>
        <CardTitle className="p-3 bg-white rounded m-2 AppLeft">
          <h2>{salary.name}</h2>
        </CardTitle>
        <CardBody>
          <CardText className="AppLeft ml-3">
            Mã nhân viên: {salary.id}
          </CardText>
          <CardText className="AppLeft ml-3">
            Hệ số lương: {salary.salaryScale}
          </CardText>
          <CardText className="AppLeft ml-3">
            Số giờ làm thêm: {salary.overTime}
          </CardText>
          <CardText className="pl-4 bg-grey shadow AppLeft ml-3">
            Lương:{" "}
            {(salary.salaryScale * luongCB + salary.overTime * luongTC).toFixed(
              0
            )}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
const Salary = (props) => {
  const [sortSalary, setSortSalary] = useState(false);

  const salary = props.luong
    .sort((a, b) =>
      sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale
    )
    .map((ss) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
          <RenderSalary salary={ss} />
        </div>
      );
    });
  return (
    <div className="container">
      
        
      <Button
        className="btn btn-danger"
        onClick={() => setSortSalary(!sortSalary)}
      >
        Sắp xếp theo hệ số lương
      </Button>
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};
export default Salary;
