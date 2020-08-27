import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
} from "reactstrap";
import { Link, NavLink as RRNavLink } from "react-router-dom";
export default function FrontNavBar() {
  return (
    <div>
      <Navbar className="navbar-horizontal navbar-dark bg-default" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            Default Color
          </NavbarBrand>
          <button
            aria-controls="navbar-default"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-toggle="collapse"
            id="navbar-default"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-default">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">HOME</Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-default"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-default"
                    data-toggle="collapse"
                    id="navbar-default"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  className="nav-link-icon"
                  to="/register"
                //   activeClassName="active" is default 
                >
                  <i className="ni ni-favourite-28" />
                  <span className="nav-link-inner--text d-lg-none">
                    Register
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" tag={RRNavLink} to="/login">
                  <i className="ni ni-notification-70" />
                  <span className="nav-link-inner--text d-lg-none">Login</span>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <NavLink
                  aria-expanded={false}
                  aria-haspopup={true}
                  className="nav-link-icon"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbar-default_dropdown_1"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-settings-gear-65" />
                  <span className="nav-link-inner--text d-lg-none">
                    Settings
                  </span>
                </NavLink>
                <DropdownMenu aria-labelledby="navbar-default_dropdown_1" right>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </div>
  );
}
