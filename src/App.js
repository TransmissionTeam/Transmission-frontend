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

      carsInfo: [],
      carsInfoExisting: false,
      electricCars: [],
      haybridCars: [],
    }
  };


  userEmailInfo = (userEmail) => {
    this.setState({ userEmail });
    // console.log('userEmail:',this.state.userEmail);
}


  getCarsInfo = () => {
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
  }


  render() {

    if (!this.state.carsInfoExisting) {
      this.getCarsInfo();
    }


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

              />
              {/* <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br> */}

            </Route >

            <Route exact path="/aboutus">

              <AboutUs />

            </Route >

          </Switch>

          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
