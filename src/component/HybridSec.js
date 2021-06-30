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

            userEmailTrue: false,
            moreThreeCarRent: false,

            userCarsRent: '',


            ifCarExist: false,
            carRentDoneAdd: false,
            carRentName: '',

        }
    }

    discriptionInfo = (discriptionAdd) => {
        this.setState({ discriptionAdd });
    }

    dateOneInfo = (dateOneAdd) => {
        this.setState({ dateOneAdd });
    }

    dateTowInfo = (dateTowAdd) => {
        this.setState({ dateTowAdd });
    }


    handleModalClose = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleModal = (index) => {
        this.setState({
            showModal: !this.state.showModal,

            idcarAdd: this.props.haybridCars[index].idcar,
            nameAdd: this.props.haybridCars[index].name,
            typeAdd: this.props.haybridCars[index].type,
            companyAdd: this.props.haybridCars[index].company,
            colorAdd: this.props.haybridCars[index].color,
            img_urlAdd: this.props.haybridCars[index].img_url,
        })



    }

    AddRent = (e) => {
        e.preventDefault()


        let rentalD = this.state.dateOneAdd.replaceAll('-', '');

        let rentalOld;
        let returnOld;

        let idCar = this.state.idcarAdd;

        let ifCarExistTow = false;

        for (let i = 0; i < this.state.userCarsRent.length; i++) {

            if (this.state.userCarsRent[i].idcar === idCar) {

                rentalOld = this.state.userCarsRent[i].rentalDate.replaceAll('-', '');
                returnOld = this.state.userCarsRent[i].returnDate.replaceAll('-', '');
                if ((Number(rentalOld) <= Number(rentalD)) && (Number(returnOld) >= Number(rentalD))) {
                    ifCarExistTow = true;
                    this.setState({
                        ifCarExist: !this.state.ifCarExist,
                    })
                }
            }

        }

        if (!ifCarExistTow) {

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
            axios.post(`${process.env.REACT_APP_URL}/car`, reqBody).then(response => {

                this.setState({
                    carRentDoneAdd: !this.state.carRentDoneAdd,
                    carRentName: reqBody.name,
                })

                if ( response.data.cars.length >=3 ) {
                    this.handleModalClose();
                }

            }).catch(error =>
                alert(error.message)
            )
        }



    }

    // ************************************* Start Get *************************************
    getUserRent = () => {
        axios.get(`${process.env.REACT_APP_URL}/car?email=${this.props.userEmail}`).then(response => {

            this.setState({
                userCarsRent: response.data.cars,
                userEmailTrue: true

            })

            if (response.data.cars.length >= 3) {
                this.setState({
                    moreThreeCarRent: true,
                })
            }
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }
    // ************************************* End Get *************************************

    render() {

        if (!(this.props.userEmail === '') && !(this.state.userEmailTrue)) {

            this.getUserRent();

        }


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
                                        <Card.Body style={{ textAlign: 'center' }}>
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

                    moreThreeCarRent={this.state.moreThreeCarRent}


                    ifCarExist={this.state.ifCarExist}
                    carRentDoneAdd={this.state.carRentDoneAdd}
                    carRentName={this.state.carRentName}
                />
            </>
        )
    }
}

export default withAuth0(HybridSec)
