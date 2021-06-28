import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'


export class Header extends Component {
    render() {
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
                            <Nav.Link href="/Rent">Car Rent</Nav.Link>
                            <Nav.Link href="/AboutUs">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Log In</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Log Out</Nav.Link>
                            <Nav.Link >Yousef Abu-Jalboush</Nav.Link>
                            <Image src="https://via.placeholder.com/1000x1000/fff" roundedCircle style={{ width: '42px', height: '42px' }} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header
