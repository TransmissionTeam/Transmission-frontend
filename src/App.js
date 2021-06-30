import React, { Component } from 'react'
import axios from 'axios';

import './App.css';

import { withAuth0 } from "@auth0/auth0-react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Electric from './component/Electric';
import Rent from './component/Rent';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Hybrid from './component/Hybrid';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      userEmail: '',
      userName: '',
      userPicture: '',


      carsInfo: [],
      carsInfoExisting: false,
      electricCars: [],
      haybridCars: [],
    }
  };


  userEmailInfo = (userEmail, userName, userPicture) => {
    this.setState({
      userEmail: userEmail,
      userName: userName,
      userPicture: userPicture,
    });
  }



  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_URL}/cars`).then(response => {

      let electricCar = response.data.filter((number) => {
        return number.type === "Electric";
      });
      let haybridCar = response.data.filter((number) => {
        return number.type === "Hybrid";
      });

      this.setState({
        carsInfoExisting: true,
        carsInfo: response.data,
        electricCars: electricCar,
        haybridCars: haybridCar,
      })
    }).catch(
      error => {
        alert(error.message);
      }
    );
  };


  render() {




    return (

      <>

        <Router>
          <Header

            userEmailInfo={this.userEmailInfo}

          />

          <Switch>

            <Route exact path="/">

              <Home />

            </Route >

            <Route exact path="/Electric">

              <Electric

                electricCars={this.state.electricCars}
                userEmail={this.state.userEmail}

              />
            </Route >

            <Route exact path="/Hybrid">

              <Hybrid

                haybridCars={this.state.haybridCars}
                userEmail={this.state.userEmail}

              />

            </Route >

            <Route exact path="/aboutus">

              <AboutUs />

            </Route >


            <Route exact path="/Rent">

              isAuthenticated && (

              <Rent
                userEmail={this.state.userEmail}
                userName={this.state.userName}
                userPicture={this.state.userPicture}

              />
              )


            </Route >

          </Switch>

          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
