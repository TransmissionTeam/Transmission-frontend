import React, { Component } from 'react'

import "./css/CarouselsCar.css";


import Carousel from 'react-bootstrap/Carousel'

export class CarouselsCarHybrid extends Component {
    render() {
        return (
            <Carousel fade className="CarouselCar">
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="http://www.theautohost.com/_contentPages/vehicleContentPages/kia/2021/Niro-Plugin-Hybrid/images/header.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A businessman is a hybrid of a dancer and a calculator.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://t1-cms-4.images.toyota-europe.com/toyotaone/euen/1600x900_Header_01%20(6)_tcm-11-1333099.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>I wish people would spend their money on hybrid cars.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://cimg2.ibsrv.net/ibimg/hgm/1200x675-1/100/185/2008-honda-insight-hybrid-concept-013_100185162.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>I strongly believe in hybrid cars.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 CarouselImg"
                        src="https://ddc1.s3.amazonaws.com/NzKtFvEuh2TG4miQBA%3D%3D/CDy2BvBgoiXPo024/Vm3qUg%3D%3D/PG74MvV7oijWrAqVKi0q4MY%3D/header.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>I strongly believe in hybrid cars.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselsCarHybrid
