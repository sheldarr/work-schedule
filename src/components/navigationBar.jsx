import React from 'react';

import { Glyphicon, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';

const NavigationBar = React.createClass({
    render () {
        return (
            <Navbar>
                <NavbarBrand><span><Glyphicon glyph="time"/> {'work-schedule'}</span></NavbarBrand>
                <Nav className="pull-right">
                    <NavItem href="/#/workers">{'Workers'}</NavItem>
                    <NavItem href="/#/shifts">{'Shifts'}</NavItem>
                    <NavItem href="/#">{'Calendar'}</NavItem>
                </Nav>
            </Navbar>
        );
    }
});

export default NavigationBar;
