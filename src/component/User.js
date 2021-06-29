import React, { Component } from 'react'

import { withAuth0 } from "@auth0/auth0-react";

import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'

export class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.auth0.user.name,
            userEmail: this.props.auth0.user.email,
            userPicture: this.props.auth0.user.picture,

            userEmailDefined:false,
        }
    }

    

    render() {

        if (!this.state.userEmailDefined) {
            this.props.userEmailInfo(this.state.userEmail);
            this.setState({

                userEmailDefined:!this.state.userEmailDefined,

            })
        }
        

        return (
            <>
                <Nav.Link >{this.state.userName}</Nav.Link>
                <Image src={this.state.userPicture} roundedCircle style={{ width: '42px', height: '42px' }} />
            </>
        )
    }
}

export default withAuth0(User);
