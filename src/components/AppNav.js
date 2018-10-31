import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from  'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

const AppNav = ({isOpen, open }) => {

    return (
        <Navbar className="navbar-dark bg-primary" expand="md">
          <Link className="navbar-brand" to="/">Prello</Link>
          <NavbarToggler onClick={open()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/board/">Board</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
}

AppNav.propTypes={
    open: PropTypes.func.isRequired,
  }

export default AppNav;