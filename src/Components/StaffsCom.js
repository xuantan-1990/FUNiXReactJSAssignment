import React,{Component} from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';

export default class Staffs extends Component {
    render() {
        const Staff = this.props.staffs.map(staff => {
            return (
              <div key={staff.id} className="col-6 col-md-4 col-xl-2 mb-3">
                <Card>
                  <Link to={`/nhanvien/${staff.id}`}>
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <CardBody>
                      <CardTitle>{staff.name}</CardTitle>
                    </CardBody>
                  </Link>
                </Card>
              </div>
            );
        })
        return (
          <div className="container col-9">
            <div className="row m-1">
              <h2>Nhân Viên</h2>
            </div>
            <hr />
            <div className="row">{Staff}</div>
          </div>
        );
    }
    
}