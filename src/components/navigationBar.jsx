import React from 'react';

import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';

const NavigationBar = React.createClass({
    render () {
        return (
            <Navbar>
                <NavbarBrand>{'work-schedule'}</NavbarBrand>
                <Nav className="pull-right">
                    <NavItem href="#">{'Calendar'}</NavItem>
                </Nav>
            </Navbar>
        );
    }
});

export default NavigationBar;
