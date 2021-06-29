import React, { Component } from 'react'
import axios from 'axios';

import { withAuth0 } from "@auth0/auth0-react";
import AddRentModal from './AddRentModal'

import './css/ElectricSec.css'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class HybridSec extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // userEmail: this.props.userEmail,

            showModal: false,

            idcarAdd: '',
            nameAdd: '',
            typeAdd: '',
            companyAdd: '',
            colorAdd: '',
            img_urlAdd: '',

            discriptionAdd: '',
            dateOneAdd: '',
            dateTowAdd: '',

        }
    }

    discriptionInfo = (discriptionAdd) => {
        this.setState({ discriptionAdd });
        // console.log('discriptionAdd:',this.state.discriptionAdd);
    }

    dateOneInfo = (dateOneAdd) => {
        // console.log(dateOneAdd);
        this.setState({ dateOneAdd });
        // console.log('dateOneAdd:',this.state.dateOneAdd);
    }

    dateTowInfo = (dateTowAdd) => {
        this.setState({ dateTowAdd });
        // console.log('dateTowAdd:',this.state.dateTowAdd);
    }


    handleModalClose = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleModal = (index) => {
        // console.log(this.props.electricCars[index].name);
        this.setState({
            showModal: !this.state.showModal,

            idcarAdd: this.props.haybridCars[index].idcar,
            nameAdd: this.props.haybridCars[index].name,
            typeAdd: this.props.haybridCars[index].type,
            companyAdd: this.props.haybridCars[index].company,
            colorAdd: this.props.haybridCars[index].color,
            img_urlAdd: this.props.haybridCars[index].img_url,
        })

        // console.log(this.state.typeAdd);
        // console.log(this.state.colorAdd);

        // console.log(this.state.userEmail);

    }

    AddRent = (e) => {
        e.preventDefault()

        const reqBody = {
            email: this.props.userEmail,
            idcar: this.state.idcarAdd,
            name: this.state.nameAdd,
            type: this.state.typeAdd,
            company: this.state.companyAdd,
            color: this.state.colorAdd,
            img_url: this.state.img_urlAdd,
            discription: this.state.discriptionAdd,
            rentalDate: this.state.dateOneAdd,
            returnDate: this.state.dateTowAdd,

        }
        console.log(reqBody);
        axios.post(`${process.env.REACT_APP_URL}/car`, reqBody).then(response => {
            // alert("Doneeeeeeeeeee");
        }).catch(error =>
            alert(error.message)
        )

        this.handleModalClose();
    }

    render() {
        return (
            <>
                <Container className="ElectricSec">
                        <h2 class="secCarh2">
                            Hybrid Cars for Rent
                        </h2>
                    <Row>

                        {
                            this.props.haybridCars.map((value, index) => {
                                return (
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={value.img_url} alt={value.name} style={{ width: '100%', height: '150px' }} />
                                        <Card.Body>
                                            <Card.Title>{value.name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Type : {value.type}</ListGroupItem>
                                            <ListGroupItem>Company : {value.company}</ListGroupItem>
                                            <ListGroupItem>Color : {value.color}</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body style={{ textAlign:'center' }}> 
                                            <Button variant="dark" onClick={() => { this.handleModal(index) }}  >Rent Now</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }

                    </Row>
                </Container>
                <AddRentModal

                    handleModalClose={this.handleModalClose}
                    showModal={this.state.showModal}

                    AddRent={this.AddRent}

                    discriptionInfo={this.discriptionInfo}
                    dateOneInfo={this.dateOneInfo}
                    dateTowInfo={this.dateTowInfo}

                />
            </>
        )
    }
}

export default withAuth0(HybridSec)
