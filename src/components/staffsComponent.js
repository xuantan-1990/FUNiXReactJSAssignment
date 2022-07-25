import React, { Component } from 'react';


class Staffs extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const staffs = this.props.staffsList.map((staff) => {
          return (
            <div key={staff.id}>
                    <h4>{staff.name}</h4>
            </div>
          );
        });
        return (
          <div className="container">
            <div className="row">
              {staffs}
            </div>
          </div>
        );
    }
}

export default Staffs