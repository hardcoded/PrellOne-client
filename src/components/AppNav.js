import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap'
import { isAuthenticated, logout } from '../services/auth.service'

const AppNav = ({ isOpen, token, open, username, close }) => {

    return (
        <Navbar className="navbar-dark bg-primary" expand="md">
            <Link className="navbar-brand" to="/">PrellOne</Link>
            <NavbarToggler onClick={() => { if (isOpen) { close() } else { open() } }} />
            <Collapse isOpen={isOpen} navbar>
                {!token && !isAuthenticated() &&
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/register">Sign up</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/login">Sign in</Link>
                        </NavItem>
                    </Nav>
                }
                {(token || isAuthenticated()) &&
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to={`/${username}/boards`}>Boards</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/team">Team</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={`/${username}/account`}>Account</Link>
                        </NavItem>
                        <NavItem>
                            <Button onClick={logout}>Log out</Button>
                        </NavItem>
                    </Nav>
                }
            </Collapse>
        </Navbar>
    );
}

AppNav.propTypes = {
    open: PropTypes.func.isRequired,
}

export default AppNav;