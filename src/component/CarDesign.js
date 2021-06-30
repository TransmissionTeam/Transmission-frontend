import React, { Component } from 'react'

import './css/CarDesign.css'

import car from './img/car.png'

export class CarDesign extends Component {
    render() {
        return (

            <section id="container">
                <div id="sideImg">
                    <img src={car} alt=""></img>
                </div>
                <div id="contentSection">
                    <h2>Hybrid</h2>
                    <p>Most strong hybrids will have a choice of power modes, too, ranging from eco to power, enabling the driver to choose maximum efficiency or performance depending on the driving conditions.</p>
                    <img src="Images/logo.png" alt=""></img>
                </div>

            </section>
        )
    }
}

export default CarDesign
