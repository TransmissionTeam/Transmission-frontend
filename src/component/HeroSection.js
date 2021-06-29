import React, { Component } from 'react'

import "./css/HeroSection.css";

import Button from 'react-bootstrap/Button';

import CarVidoe from './videos/CarVidoe.mp4';

export class HeroSection extends Component {
    render() {
        return (
            <div className='hero-container'>
                <video src={CarVidoe} autoPlay loop muted />
                <h1>Transmission</h1>
                <p>Are you looking for the best comfortable modern cars !?</p>
                <p>We provide electric and hybrid cars for rent.</p>
                <div className='hero-btns'>
                    <Button
                        href="/Electric"
                        className='btns'
                        variant="secondary"
                        size="lg"
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >

                    </Button>
                    <Button
                        href="/Hybrid"
                        className='btns'
                        size="lg"
                        variant="secondary"
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        // onClick={console.log('hey')}
                    >

                    </Button>
                </div>
            </div>
        )
    }
}

export default HeroSection
