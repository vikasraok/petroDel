import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import './style.scss';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as Link,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Icon from 'react-icons-kit';
import { ic_notifications_none } from 'react-icons-kit/md/ic_notifications_none';
const isAuthenticated = props => {
  return true;
};
export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated(props) ? (
        <div className="app">
          <Navbar color="info" dark expand="md">
            <NavbarBrand href="/">PetroDel</NavbarBrand>
            <Collapse isOpen={true} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="#" className="notification">
                    <Icon icon={ic_notifications_none} size={32} />
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <div className="user">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        width="40"
                        alt="user"
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="app-page">
            <div className="app-sidenav">
              <NavLink to="/admin">Dashboard</NavLink>
              <NavLink to="/admin/booking">Order Booking</NavLink>
              <NavLink to="/admin/customer">Customer</NavLink>
              <NavLink to="/admin/driver">Containers</NavLink>
              <NavLink to="/admin/vehicle">Payments</NavLink>
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
