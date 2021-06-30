import React, { Component } from 'react'
import axios from 'axios';

import { withAuth0 } from "@auth0/auth0-react";

import './css/ElectricSec.css'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import AddRentModal from './AddRentModal'

import Alert from 'react-bootstrap/Alert'

import moment from 'moment';

moment().format();

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

            discriptionAdd: '',
            dateOneAdd: '',
            dateTowAdd: '',

            userEmailTrue: false,
            moreThreeCarRent: false,

            userCarsRent: '',

            ifCarExist: false,
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
            nameAdd: this.props.electricCars[index].name,
            typeAdd: this.props.electricCars[index].type,
            companyAdd: this.props.electricCars[index].company,
            colorAdd: this.props.electricCars[index].color,
            img_urlAdd: this.props.electricCars[index].img_url,
        })

        // console.log(this.state.typeAdd);
        // console.log(this.state.colorAdd);

        // console.log(this.state.userEmail);

    }

    AddRent = (e) => {
        e.preventDefault()
        // replaceAll('-', '')

        // const dateNow = moment().format("YYYYMMDD");

        let rentalD = this.state.dateOneAdd.replaceAll('-', '');
        // let returnD = this.state.dateTowAdd.replaceAll('-', '') ;

        let rentalOld;
        let returnOld;

        let idCar = this.state.idcarAdd;
        // console.log(rentalD);
        // console.log(returnD);
        // console.log(idCar);

        let ifCarExistTow = false;

        for (let i = 0; i < this.state.userCarsRent.length; i++) {

            if (this.state.userCarsRent[i].idcar === idCar) {

                rentalOld = this.state.userCarsRent[i].rentalDate.replaceAll('-', '');
                returnOld = this.state.userCarsRent[i].returnDate.replaceAll('-', '');
                // console.log(rentalOld);
                if ((Number(rentalOld) <= Number(rentalD)) && (Number(returnOld) >= Number(rentalD))) {
                    // alert('The car is not available now.');
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
            console.log(reqBody);
            axios.post(`${process.env.REACT_APP_URL}/car`, reqBody).then(response => {
                // alert("Doneeeeeeeeeee");
            }).catch(error =>
                alert(error.message)
            )

        }



        this.handleModalClose();
    }

    // ************************************* Start Get *************************************
    getUserRent = () => {
        axios.get(`${process.env.REACT_APP_URL}/car?email=${this.props.userEmail}`).then(response => {

            // console.log(response);
            this.setState({
                userCarsRent: response.data.cars,
                userEmailTrue: true

            })

            if (response.data.cars.length >= 3) {
                // console.log(response.data.cars.length);
                this.setState({
                    moreThreeCarRent: true,
                })
            }
            // console.log(response.data.cars.length);
            // console.log(response.data);
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }
    // ************************************* End Get *************************************


    render() {

        if (!(this.props.userEmail === '') && !(this.state.userEmailTrue)) {

            // console.log(this.props.userEmail);
            this.getUserRent();

        }
        // console.log(this.props.electricCars);
        return (
            <>

                <Container className="ElectricSec">
                    <h2>
                        Electric Cars for Rent
                    </h2>
                    {
                        this.state.ifCarExist && (
                            <Alert variant="danger">
                                <Alert.Heading>Rent Car</Alert.Heading>
                                <p style={{fontSize:'25px' , color:'black'}}>
                                    The car is not available now.
                                </p>
                                <hr />
                            </Alert>
                        )
                    }

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

                    moreThreeCarRent={this.state.moreThreeCarRent}

                />
            </>
        )
    }
}

export default withAuth0(ElectricSec);
