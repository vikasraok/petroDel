import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import './style.scss';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Icon from 'react-icons-kit';
import { ic_notifications_none } from 'react-icons-kit/md/ic_notifications_none';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_insert_drive_file } from 'react-icons-kit/md/ic_insert_drive_file';
import { ic_person } from 'react-icons-kit/md/ic_person';
export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={(props /* cProps.isAuthenticated */) =>
      true ? (
        <div className="app">
          {/* <header className="app-header"></header> */}
          <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">PetroDel</NavbarBrand>
            <Collapse isOpen={true} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#" className="notification">
                    <Icon icon={ic_notifications_none} size={28} />
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <div className="user">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        width="40"
                      />
                      <span>John Doe</span>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Support</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="app-page">
            <div className="app-sidenav">
              <Link to="/admin">Dashboard</Link>
              <Link to="/booking">Order Booking</Link>
              <Link to="/customer">Customer</Link>
              <Link to="/driver">Driver</Link>
              <Link to="/vehicle">Vehicle</Link>
            </div>
            <div className="app-main">
              <C {...props} {...cProps} />
            </div>
          </div>
        </div>
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${
            props.location.search
          }`}
        />
      )
    }
  />
);
