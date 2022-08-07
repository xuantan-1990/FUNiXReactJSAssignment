import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const luongCB = 3000000;
const luongTC = 200000;
 function RenderSalary ({salary, sumSalary}) {
      
    return (
      <div className="container">
        <Card>
          <CardTitle className="p-3 bg-white rounded m-2">
            {salary.name}
          </CardTitle>
          <CardBody>
            <CardText>Mã nhân viên: {salary.id}</CardText>
            <CardText>Hệ số lương: {salary.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
            <CardText className="p-2 bg-light shadow">
              Lương:{""}
              {(salary.salaryScale * luongCB + salary.overTime * luongTC).toFixed(0)}
            </CardText>
          </CardBody>
            </Card>
      </div>
    );
}
const Salary = (props) => {
    const [sortSalary, setSortSalary] = useState(false);
    
    const salary = props.luong.map((ss) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
            <RenderSalary salary={ss} />
          </div>
        );
    })
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staffs">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              Bảng lương
            </BreadcrumbItem>
          </Breadcrumb>
            </div>
            <div className='row shadow mb-3'>{salary}</div>
      </div>
    );
}
  export default Salary;
