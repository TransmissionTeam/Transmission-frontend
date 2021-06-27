import React, { Component } from 'react';
import CarSection from './CarSection';
import "./css/Home.css";
import HeroSection from './HeroSection';
import Services from './Services';



export class Home extends Component {
    render() {
        return (
            <>
                <HeroSection/>
                <CarSection/>
                <Services/>
            </>
        )
    }
}

export default Home
