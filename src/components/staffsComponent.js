import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap'


class Staffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        const staffs = this.props.staffsList.map((staff) => {
          return (
            <div key={staff.id} className="col-6 col-md-5">
              <Row>
                <Card
                  className="my-2"
                  color="primary"
                  outline
                  style={{
                    width: "28rem",
                  }}
                >
                  <Col xs="6">
                    <h4>{staff.name}</h4>
                  </Col>
                </Card>
              </Row>
            </div>
          );
        });
        return (
          <div className="container">
            <div className="row">{staffs}</div>
          </div>
        );
    }
}

export default Staffs