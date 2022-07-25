import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Staffs from "./components/staffsComponent";
import './App.css';
import { STAFFS } from './shared/staffs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffsList: STAFFS
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            </div>
          </Navbar>
          <Staffs staffsList={this.state.staffsList} />
        </div>
        <h4 className="App-text">Bấm vào tên nhân viên để xem thông tin.</h4>
      </div>
    );
  }
 
}

export default App;
