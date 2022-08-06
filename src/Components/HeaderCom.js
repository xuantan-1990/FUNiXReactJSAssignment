import React from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse, Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <div>
        <Navbar dark expand="md" color='primary'>
          <div className="container">
            <NavbarToggler />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" width="100" alt="Employees" />
            </NavbarBrand>
            <Collapse navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/nhanvien">
                    <span className="fa fa-users fa-lg"></span> Nhân viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/phongban">
                    <span className="fa fa-id-card-o fa-lg"></span> Phòng ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/bangluong">
                    <span className="fa fa-money fa-lg"></span> Bảng lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
}