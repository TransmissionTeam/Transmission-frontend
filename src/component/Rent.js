import React, { Component } from 'react'
import './css/rent.css'
// import User from './User';
// import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
// import './css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import UpdateRentModal from './UpdateRentModal';

export class Rent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            userEmailTrue: false,

            carIndex: 0,
            idcar: '',
            name: '',
            type: '',
            company: '',
            color: '',
            img_url: '',
            discription: '',
            rentalDate: '',
            returnDate: '',


            discriptionUpdate: '',
            rentalDateUpdate: '',
            returnDateUpdate: '',

            showUpdateForm: false,

            userHaveRentCar: false,
        }
    }

    // ************************************* Start Get *************************************
    getUserRent = () => {
        axios.get(`${process.env.REACT_APP_URL}/car?email=${this.props.userEmail}`).then(response => {

            // console.log(response);
            this.setState({
                cars: response.data.cars,
                userEmailTrue: true

            })

            if (response.data.cars.length > 0) {
                this.setState({
                    userHaveRentCar: true
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



    // ************************************* Start Delete *************************************

    deleteRentcar = (index) => {

        // console.log(index);
        axios.delete(`${process.env.REACT_APP_URL}/car/${index}?email=${this.props.userEmail}`).then(response => {
            // alert("Delete Doneeeeeeeeeeeeee");
            this.setState({
                cars: response.data.cars,
            });
            // console.log(this.state.booksData);
        }).catch(error =>
            alert(error.message)
        )
    }

    // ************************************* End Delete *************************************

    // ************************************* Start Put *************************************

    updatediscriptionUpdate = (Update) => this.setState({ discriptionUpdate: Update });
    updaterentalDateUpdate = (Update) => this.setState({ rentalDateUpdate: Update });
    updatereturnDateUpdate = (Update) => this.setState({ returnDateUpdate: Update });

    UpdateRent = (carsObject, idx) => {
        // console.log(carsObject);
        this.setState({

            idcar: carsObject.idcar,
            name: carsObject.name,
            type: carsObject.type,
            company: carsObject.company,
            color: carsObject.color,
            img_url: carsObject.img_url,
            discription: carsObject.discription,
            rentalDate: carsObject.rentalDate,
            returnDate: carsObject.returnDate,

            carIndex: idx,

            showUpdateForm: !this.state.showUpdateForm,
        })
    }

    updateRentcar = (e) => {

        e.preventDefault();

        const reqBody = {

            email: this.props.userEmail,

            idcar: this.state.idcar,
            name: this.state.name,
            type: this.state.type,
            company: this.state.company,
            color: this.state.color,
            img_url: this.state.img_url,
            discription: this.state.discriptionUpdate,
            rentalDate: this.state.rentalDateUpdate,
            returnDate: this.state.returnDateUpdate,

        }
        // console.log(reqBody);

        axios.put(`${process.env.REACT_APP_URL}/car/${this.state.carIndex}`, reqBody).then(response => {
            this.setState({
                cars: response.data.cars
            })
            // alert("Update Doneeeeeeeeeeeeee");
        }).catch(error =>
            alert(error.message)
        )
        this.handleModalPut();
    }

    handleModalPut = () => {
        this.setState({
            showUpdateForm: !this.state.showUpdateForm
        })
    }
    // ************************************* End Put *************************************

    render() {

        if (!(this.props.userEmail === '') && !(this.state.userEmailTrue)) {

            // console.log(this.props.userEmail);
            this.getUserRent();

        }


        return (
            <>
                <div class='mainDiv'>
                    <div id="page-wraper">
                        <div class="responsive-nav">
                            <i class="fa fa-bars" id="menu-toggle"></i>
                            <div id="menu" class="menu">
                                <i class="fa fa-times" id="menu-close"></i>
                                <div class="container">
                                    <div class="image">
                                        <img src={this.props.userPicture} alt={this.props.userName} />
                                    </div>
                                    <div class="author-content">
                                        <h4>{this.props.userName}</h4>
                                    </div>
                                    <nav class="main-nav" role="navigation">
                                        <ul class="main-menu">
                                            <li> {this.props.userEmail}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="sec about-me" data-section="section1">
                        <div class="section-heading">
                            <div class="container-cards">


                                {this.state.userHaveRentCar ? (
                                    this.state.cars.map((value, index) => {
                                        return (
                                            <div class="card">
                                                <div class="card-header">
                                                    <img src={value.img_url} alt="rover" />
                                                </div>
                                                <div class="card-body">
                                                    <span class="tag tag-teal">{value.type}</span> <br />
                                                    <h2 class='carModel'>{value.name}</h2>
                                                    <h2 class='carModel'>Company : {value.company}</h2>
                                                    <h2 class='carModel'>Color : {value.color}</h2>

                                                    <p class="discription">Discription : {value.discription}</p>
                                                    <h6 class='h6'>Rent Date : {value.rentalDate} to {value.returnDate}</h6>
                                                    <div class="cardbutton">
                                                        <Button variant="outline-danger" onClick={e => this.deleteRentcar(index)}>Delete</Button>
                                                        <Button variant="outline-success" onClick={e => this.UpdateRent(value, index)}>Update</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (

                                    <Alert id="alertRent" variant="warning">
                                        <Alert.Heading>Rent Car</Alert.Heading>
                                        <p>
                                            You have not requested any rental car yet.
                                        </p>
                                        <hr />
                                    </Alert>

                                )}

                            </div>
                        </div>
                    </section>
                </div >
                {
                    this.state.showUpdateForm &&
                    <UpdateRentModal

                        discription={this.state.discription}
                        rentalDate={this.state.rentalDate}
                        returnDate={this.state.returnDate}

                        updatediscriptionUpdate={this.updatediscriptionUpdate}
                        updaterentalDateUpdate={this.updaterentalDateUpdate}
                        updatereturnDateUpdate={this.updatereturnDateUpdate}

                        handleModalPut={this.handleModalPut}
                        showUpdateForm={this.state.showUpdateForm}

                        updateRentcar={this.updateRentcar}

                    />
                }
            </>
        )
    }
}

export default Rent
