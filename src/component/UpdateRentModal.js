import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import Form from 'react-bootstrap/Form'

export class UpdateRentModal extends Component {

    render() {
        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.props.showUpdateForm} onHide={() => { this.props.handleModalPut() }} >
                    <Modal.Header closeButton>Update Rent Car</Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={(e) => this.props.updateRentcar(e)}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Write a Discription</Form.Label>
                                <Form.Control
                                    value={this.props.discription}
                                    as="textarea" required
                                    placeholder="Write a discription here"
                                    style={{ height: '100px' }}
                                    onChange={(e) => this.props.updatediscriptionUpdate(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <span>
                                    <Form.Label>Rental Date  </Form.Label>
                                    <input
                                        value={this.props.rentalDate}
                                        type="date" id="birthday" name="birthday" onChange={(e) => this.props.updaterentalDateUpdate(e.target.value)} ></input>
                                </span>

                                <span style={{ float: 'right' }}>
                                    <Form.Label>Return Date  </Form.Label>
                                    <input
                                        value={this.props.returnDate}
                                        type="date" id="birthday" name="birthday" onChange={(e) => this.props.updatereturnDateUpdate(e.target.value)} ></input>
                                </span>
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Update Rent
                            </Button>
                        </Form>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => { this.props.handleModalPut() }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateRentModal
