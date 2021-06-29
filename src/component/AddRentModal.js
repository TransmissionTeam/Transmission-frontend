import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";

// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export class AddRentModal extends Component {

    render() {


        const { isAuthenticated } = this.props.auth0;

        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.props.showModal} onHide={() => { this.props.handleModalClose() }} >
                    <Modal.Header closeButton>Rent Car</Modal.Header>

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
                        isAuthenticated && (

                            <Modal.Body>

                                <Button variant="success" type="submit" onClick={(e) => this.props.AddRent(e)}>
                                    Add
                                </Button>

                                {/* 
                        <Form onSubmit={(e) => this.props.createMyBook(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Enter book name</Form.Label>
                                <Form.Control type="text" required placeholder="Enter book" onChange={(e) => this.props.updateBookName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Write a discription book</Form.Label>
                                <Form.Control
                                    as="textarea" required
                                    placeholder="Write a discription here"
                                    style={{ height: '100px' }}
                                    onChange={(e) => this.props.updateBookdescribtion(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter the status of the book</Form.Label>
                                <Form.Control as="select" aria-label="Default select example" required onChange={(e) => this.props.updateBookstatus(e.target.value)}>
                                    <option selected>Open this select menu</option>
                                    <option value="Available" >Available</option>
                                    <option value="Not-Availabe">Not Availabe</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter book URL image</Form.Label>
                                <Form.Control type="text" placeholder="Enter book image URL" onChange={(e) => this.props.updateBookurl(e.target.value)} required />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Add
                            </Button>
                        </Form>

                         */}
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
