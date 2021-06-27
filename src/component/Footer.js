import React, { Component } from 'react'

import "./css/Footer.css";
import Nav from 'react-bootstrap/Nav'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col-5">
                            <h2>About Us !?</h2>
                            <h5 className="list-unstyled">
                                A site specialized in renting electric and hybrid cars and displaying information about them. We always strive to serve you in the best possible way.
                            </h5>
                        </div>
                        {/* Column2 */}
                        <div className="col-3">
                            <h4>Services</h4>
                            <ui className="list-unstyled">
                                <li><Nav.Link className="servicesFooter" href="/">Home</Nav.Link></li>
                                <li><Nav.Link className="servicesFooter" href="/Electric">Electric Car</Nav.Link></li>
                                <li><Nav.Link className="servicesFooter" href="/Hybrid">Hybrid Car</Nav.Link></li>
                                <li><Nav.Link className="servicesFooter" href="/Rent">Car Rent</Nav.Link></li>
                                <li><Nav.Link className="servicesFooter" href="/AboutUs">About Us</Nav.Link></li>
                            </ui>
                        </div>
                        {/* Column3 */}
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

export default Footer
