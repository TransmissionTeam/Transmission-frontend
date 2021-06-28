import React, { Component } from 'react'

import { withAuth0 } from "@auth0/auth0-react";
// import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from './LoginButton'


import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Image from 'react-bootstrap/Image'
import LogoutButton from './LogoutButton';
import User from './User';


export class Header extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userName: this.props.auth0.user.name,
    //         userEmail: this.props.auth0.user.email,
    //         userPicture: this.props.auth0.user.picture
    //     }
    // }

    render() {


        const { isAuthenticated } = this.props.auth0;
        // const { loginWithRedirect } = useAuth0();

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-4" fixed="top" style={{ zIndex: '10' }}>
                <Container>
                    <Navbar.Brand href="/">Transmission</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/Electric">Electric Car</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Hybrid">Hybrid Car</NavDropdown.Item>
                            </NavDropdown>

                            {
                                isAuthenticated && (
                                    <Nav.Link href="/Rent">Car Rent</Nav.Link>
                                )
                            }

                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav>
                        {
                            !isAuthenticated && (
                                <Nav>
                                    <LoginButton />
                                </Nav>
                            )
                        }

                        {
                            isAuthenticated && (
                                <Nav>
                                    <LogoutButton />
                                    <User />
                                </Nav>
                            )
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default withAuth0(Header);
