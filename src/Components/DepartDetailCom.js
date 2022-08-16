import React from "react";
import {
  CardTitle,
  CardBody,
  CardImg,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function DepartDetail({staffs}) {
  const Staffs = staffs.map(staff => {
    return (
      <Link to={`/nhanvien/${staff.id}`}>
        <div key={staff.id} className="col-12">
          <Card>
            <CardImg width="100%" src={staff.image} alt={staff.name} />
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Link>
    );
    })
  
  return (
    <div className="container col-9 col-md-8 col-lg-7">
      <div className="row">{Staffs}</div>
    </div>
  ); 
}
