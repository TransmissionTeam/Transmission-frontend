import React, { Component } from 'react'

import { withAuth0 } from "@auth0/auth0-react";

import "./css/Footer.css";
import Nav from 'react-bootstrap/Nav'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export class Footer extends Component {
    render() {

        const { isAuthenticated } = this.props.auth0;

        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h2>About Us !?</h2>
                            <h5 className="list-unstyled">
                                A site specialized in renting electric and hybrid cars and displaying information about them. We always strive to serve you in the best possible way.
                            </h5>
                        </div>
                        <div className="col-3">
                            <h4>Services</h4>
                            <ui className="list-unstyled">
                                <li><Nav.Link className="servicesFooter" href="/">Home</Nav.Link></li>
                                <li><Nav.Link className="servicesFooter" href="/Electric">Electric Car</Nav.Link></li>
                                <li><Nav.Link className="servicesFooter" href="/Hybrid">Hybrid Car</Nav.Link></li>
                                {
                                    isAuthenticated && (
                                        <li><Nav.Link className="servicesFooter" href="/Rent">Car Rent</Nav.Link></li>
                                    )
                                }
                                <li><Nav.Link className="servicesFooter" href="/aboutus">About Us</Nav.Link></li>
                            </ui>
                        </div>
                        <div className="col-4">
                            <h4>Social Media</h4>
                            <ui className="list-unstyled">
                                <li><span className="icon"><AiFillGithub /></span> Github</li>
                                <li><span className="icon"><AiFillLinkedin /></span> Linkedin</li>
                            </ui>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm copyRight">
                            &copy;{new Date().getFullYear()} Transmission Team
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth0(Footer)
