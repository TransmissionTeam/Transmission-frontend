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
    // console.log('userEmail:',this.state.userEmail);
  }



  componentDidMount = () => {
    // console.log(process.env.REACT_APP_URL);
    axios.get(`${process.env.REACT_APP_URL}/cars`).then(response => {
      // console.log(response.data);

      let electricCar = response.data.filter((number) => {
        return number.type === "Electric";
      });
      let haybridCar = response.data.filter((number) => {
        return number.type === "Haybrid";
      });

      this.setState({
        carsInfoExisting: true,
        carsInfo: response.data,
        electricCars: electricCar,
        haybridCars: haybridCar,
      })
      // console.log(electricCar);
      // console.log(this.state.electricCars);
    }).catch(
      error => {
        alert(error.message);
      }
    );
    // console.log(this.state.carsInfo);
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

            <Route exact path="/">

              isAuthenticated && (

              )

            </Route >

            <Route exact path="/Electric">

              <Electric

                electricCars={this.state.electricCars}
                userEmail={this.state.userEmail}
                userName={this.state.userName}

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
