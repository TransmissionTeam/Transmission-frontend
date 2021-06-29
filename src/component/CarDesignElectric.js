import React, { Component } from 'react'

import './css/CarDesign.css'

import car3 from './img/car3.png'

export class CarDesignElectric extends Component {
    render() {
        return (
            <section id="container">
                <div id="sideImg">
                    <img src={car3} alt=""></img>
                </div>
                <div id="contentSection">
                    <h2>Electric</h2>
                    <p>One of the most benefit of electric cars is the contribution that they can make towards improving air quality in towns and cities. With no tailpipe, pure electric cars produce no carbon dioxide emissions when driving. This reduces air pollution considerably.</p>
                    <img src="Images/logo.png" alt=""></img>
                </div>

            </section>
        )
    }
}

export default CarDesignElectric
