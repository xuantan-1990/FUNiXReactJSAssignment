import React from 'react';
import { Nav, Navbar, NavbarBrand} from 'reactstrap';

export default function Header() {
    return (
        <div>
            <Navbar color='primary'>
                <NavbarBrand>
                    <img src='assets/images/logo.png' width='100' alt='Employees' />
                </NavbarBrand>  
            </Navbar>
        </div>
    )
}