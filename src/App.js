import React, { Component } from 'react'

import './App.css';

import { withAuth0 } from "@auth0/auth0-react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {

    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <Header />

          <Switch>

            <Route exact path="/">

              <Home />

            </Route >

            <Route exact path="/">

              isAuthenticated && (

              )

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
