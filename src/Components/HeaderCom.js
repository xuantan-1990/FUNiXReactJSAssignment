import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';

export default function Header() {
    return (
      <div>
        <Navbar color="primary">
          <div className="container">
            <NavbarBrand>
              <img src="assets/images/logo.png" width="100" alt="Employees" />
            </NavbarBrand>
          <Nav>
            <NavItem>
              <span className="fa fa-users fa-lg"></span> Nhân viên
              <span className="fa fa-id-card-o fa-lg"></span> Phòng ban
              <span className="fa fa-money fa-lg"> </span> Bảng lương
            </NavItem>
          </Nav>
          </div>
        </Navbar>
      </div>
    );
}