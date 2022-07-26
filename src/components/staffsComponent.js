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
            <div key={staff.id} className="col-12 col-md-6 col-xl-4">
              <Row>
                <Card
                  className="my-2"
                  color="primary"
                  outline
                  style={{
                    width: "90%",
                  }}
                >
                  <Col>
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