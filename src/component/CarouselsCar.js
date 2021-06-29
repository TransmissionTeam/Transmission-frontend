import React, { Component } from 'react'

import "./css/CarouselsCar.css";


import Carousel from 'react-bootstrap/Carousel'


export class CarouselsCar extends Component {
    render() {
        return (


            <Carousel fade className="CarouselCar">
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://images.unsplash.com/photo-1568559598349-dbf322d50a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>The time is right for electric cars - in fact the time is critical.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://cdn.motor1.com/images/mgl/7KvKp/s1/tesla-model-s-plugged-in-and-charging.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Electric cars are the future.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://images.unsplash.com/photo-1613979810440-00e346d107d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Electric cars are really very cool. Air-source heat pumps are great.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttp%3A%2F%2Fprod-upp-image-read.ft.com%2F75e8de86-49b1-11ea-aeb3-955839e06441%3Fsource%3Dnext%26fit%3Dscale-down%26quality%3Dhighest%26width%3D1220"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Electric cars are really very cool. Air-source heat pumps are great.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselsCar
