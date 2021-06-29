import React, { Component } from 'react'
import axios from 'axios';

import { withAuth0 } from "@auth0/auth0-react";

import './css/ElectricSec.css'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import AddRentModal from './AddRentModal'


export class ElectricSec extends Component {

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

            discriptionAdd:'',
            dateOneAdd:'',
            dateTowAdd:'',

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

            idcarAdd: this.props.electricCars[index].idcar,
            nameAdd: this.props.electricCars[index].name ,
            typeAdd: this.props.electricCars[index].type,
            companyAdd: this.props.electricCars[index].company,
            colorAdd:this.props.electricCars[index].color,
            img_urlAdd: this.props.electricCars[index].img_url,
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
            discription:this.state.discriptionAdd,
            rentalDate:this.state.dateOneAdd,
            returnDate:this.state.dateTowAdd,

        }
        console.log(reqBody);
        axios.post(`${process.env.REACT_APP_URL}/car`, reqBody).then(response => {
            alert("Doneeeeeeeeeee");
        }).catch(error =>
            alert(error.message)
        )

        this.handleModalClose();
    }

    render() {
        // console.log(this.props.electricCars);
        return (
            <>
                <Container className="ElectricSec">
                    <h2>
                        Electric Cars for Rent
                    </h2>
                    <Row>

                        {
                            this.props.electricCars.map((value, index) => {
                                return (
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={value.img_url} alt={value.name} />
                                        <Card.Body>
                                            <Card.Title>Name : {value.name}</Card.Title>
                                            <Card.Text>Type : {value.type}</Card.Text>
                                            <Card.Text>Company : {value.company}</Card.Text>
                                            <Card.Text>Color : {value.color}</Card.Text>
                                            <Button variant="primary" onClick={() => { this.handleModal(index) }}>Go somewhere</Button>
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

export default  withAuth0(ElectricSec);
