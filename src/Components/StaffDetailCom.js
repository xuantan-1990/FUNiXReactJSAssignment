import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  return (
    <div className="col-12">
      <Card>
        <CardImg width="100%" src={staff.image} value={staff.name} />
        <CardBody>
          <h3>Họ và tên: {staff.name}</h3>
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làn thêm: {staff.overTime}</p>
        </CardBody>
      </Card>
    </div>
  );
}
export default function StaffDetail(props) {
    console.log(props);
    if (props.nhanvien != null) {
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/staff">Nhân Viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.nhanvien.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.nhanvien.name}</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderStaff staff={props.nhanvien} />
              </div>
            </div>
          </div>
        );
    }
   else{<div className='container'>

        </div>}
}