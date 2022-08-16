import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem, CardBody, CardImg, CardSubtitle, Row,Card
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

export function RenderStaff({ staff }) {
 const department =
   staff.departmentId === "Dept01"
     ? "Sale"
     : staff.departmentId === "Dept02"
     ? "HR"
     : staff.departmentId === "Dept03"
     ? "Marketing"
     : staff.departmentId === "Dept04"
     ? "Marketing"
     : "Finance"; 
  return (
    <div>
      <Row>
        <div className="col-12 col-md-5 col-xl-5">
          <img width="100%" float="right" src={staff.image} alt={staff.name} />
        </div>
        <div className="col-12 col-md-7 col-xl-7">
          <h3>Họ và tên: {staff.name}</h3>
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {department}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làn thêm: {staff.overTime}</p>
        </div>
      </Row>
    </div>
  );
}

export  const RenderStaffItem = ({ staff }) => {
  return (
    <Link to={`/nhanvien/${staff.id}`}>
      <Card>
        <CardImg src={staff.image} alt={staff.name} />
        <CardBody>
          <CardSubtitle>{staff.name}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
};

export default function StaffDetail(props) {
    if (props.nhanvien != null) {
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/nhanvien">Nhân Viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.nhanvien.name}</BreadcrumbItem>
              </Breadcrumb>
              <hr />
            </div>
            <div className="row">
              <div className="col-12 col-md-7 m-1">
                <RenderStaff
                  staff={props.nhanvien}
                />
              </div>
            </div>
          </div>
        );
    }
   else{<div className='container'>

        </div>}
}