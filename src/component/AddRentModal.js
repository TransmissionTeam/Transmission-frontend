import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import Form from 'react-bootstrap/Form'

import Alert from 'react-bootstrap/Alert'


export class AddRentModal extends Component {

    render() {


        const { isAuthenticated } = this.props.auth0;

        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.props.showModal} onHide={() => { this.props.handleModalClose() }} >
                    <Modal.Header >Rent Car</Modal.Header>

                    {
                        !isAuthenticated && (

                            <Modal.Body>
                                <h4>Permission to access</h4>
                                <p style={{ color: 'black' }}>
                                    You are not logged in through Auth to be able to rent a car.
                                </p>
                            </Modal.Body>

                        )
                    }

                    {
                        this.props.moreThreeCarRent ? (

                            isAuthenticated && (

                                <Modal.Body>
                                    <h4>Rent Car</h4>
                                    <p style={{ color: 'black' }}>
                                        It is not possible to rent more than three cars together.
                                    </p>
                                </Modal.Body>

                            )

                        ) : (

                            <Modal.Body>

                                {
                                    this.props.ifCarExist && (
                                        <Alert variant="danger">
                                            <Alert.Heading>Rent Car</Alert.Heading>
                                            <p style={{ fontSize: '25px', color: 'black' }}>
                                                The car is not available now.
                                            </p>
                                            <hr />
                                        </Alert>
                                    )
                                }

                                {
                                    this.props.carRentDoneAdd && (
                                        <Alert variant="success">
                                            <Alert.Heading>Rent Car</Alert.Heading>
                                            <p style={{ fontSize: '25px', color: 'black' }}>
                                                Done Add Rent Car {this.props.carRentName}  , check Rent Page
                                            </p>
                                            <hr />
                                        </Alert>
                                    )
                                }


                                {
                                    isAuthenticated && (
                                        <Form onSubmit={(e) => this.props.AddRent(e)}>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Write a Discription</Form.Label>
                                                <Form.Control
                                                    as="textarea" required
                                                    placeholder="Write a discription here"
                                                    style={{ height: '100px' }}
                                                    onChange={(e) => this.props.discriptionInfo(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail" >

                                                <span>
                                                    <Form.Label>Rental Date  </Form.Label>
                                                    <input required type="date" id="Date" name="Date" onChange={(e) => this.props.dateOneInfo(e.target.value)} ></input>
                                                </span>

                                                <span style={{ float: 'right' }}>
                                                    <Form.Label>Return Date  </Form.Label>
                                                    <input required type="date" id="Date" name="Date" onChange={(e) => this.props.dateTowInfo(e.target.value)} ></input>
                                                </span>

                                            </Form.Group>

                                            <Button variant="success" type="submit">
                                                Add Rent
                                            </Button>
                                        </Form>

                                    )
                                }
                            </Modal.Body>


                        )
                    }

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => { this.props.handleModalClose() }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default withAuth0(AddRentModal);
