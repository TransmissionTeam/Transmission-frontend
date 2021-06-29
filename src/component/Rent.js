import React, { Component } from 'react'
import './css/rent.css'
// import User from './User';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
// import './css/bootstrap.css'


export class Rent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            toyota: false,
       
        }
    }

    // get fuction
    componentWillMount = () => {
        console.log(this.state.REACT_APP_URL);
        axios.get(`${process.env.REACT_APP_URL}/car?email=${this.props.userEmail}`).then(response => {

            console.log(response);
            this.setState({
                cars: response.data,
                toyota: true

            })
            // console.log(this.state.booksData.length);
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }
    // end get


    render() {
            
            // if (!this.state.toyota ) {
            //     console.log(this.props.userEmail);
            //     this.componentWillMount();

    
            // }
        

        return (
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
                            <div class="card">
                                <div class="card-header" >
                                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
                                </div>
                                <div class="card-body">
                                    <span class="tag tag-teal">Car Model : 2018</span> <br />
                                    <h2 class='carModel'>Car Name : Toyota</h2>
                                    <h6 class='h6'>Rent Date : 14/5/2021 to 20/6/2021 </h6>
                                    <div class="cardbutton">
                                        <button type="button" class="btn btn-primary">Edit</button>
                                        <button type="button" class="btn btn-secondary">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
                                </div>
                                <div class="card-body">
                                    <span class="tag tag-teal">Car Model : 2018</span> <br />
                                    <h2 class='carModel'>Car Name : Toyota</h2>
                                    <h6 class='h6'>Rent Date : 14/5/2021 to 20/6/2021 </h6>
                                    <div class="cardbutton">
                                        <button type="button" class="btn btn-primary">Edit</button>
                                        <button type="button" class="btn btn-secondary">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
                                </div>
                                <div class="card-body">
                                    <span class="tag tag-teal">Car Model : 2018</span> <br />
                                    <h2 class='carModel'>Car Name : Toyota</h2>
                                    <h6 class='h6'>Rent Date : 14/5/2021 to 20/6/2021 </h6>
                                    <div class="cardbutton">
                                        <button type="button" class="btn btn-primary">Edit</button>
                                        <button type="button" class="btn btn-secondary">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default withAuth0(Rent)
