import React, { Component } from 'react'

import "./css/CarSection.css";

import car2 from './img/car2.png'
import car from './img/car.png'

export class CarSection extends Component {
    render() {
        return (
            <>
                <section >
                    <div class="section layout_padding padding_top_0">
                        <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
                        <div class="container">

                            <div class="row">

                                <div class="col-lg-8" >
                                    <div class="full text_align_right r-img">
                                        <img class="img-responsive" src={car2} alt="#" />
                                    </div>
                                </div>

                                <div class="col-lg-4 margin_top_30">
                                    <div class="full margin_top_30">
                                        <h3 class="main_heading _left_side margin_top_30">Electric Car</h3>
                                        <p class="large">If you want the best acceleration and smoothness without disturbance, you should choose one of the electric cars available in our company.</p>
                                    </div>
                                    <div class="full button_section margin_top_30">
                                        <a href="/Electric">See More</a>
                                    </div>
                                </div>

                            </div>


                        <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>


                            <div class="row">
                                <div class="col-lg-4 margin_top_30">
                                    <div class="full margin_top_30">
                                        <h3 class="main_heading _left_side margin_top_30">Hybrid Car</h3>
                                        <p class="large">If you are a fan of saving and at the same time you love gasoline engines, you can choose one of the hybrid cars available in the company.</p>
                                    </div>
                                    <div class="full button_section margin_top_30">
                                        <a href="/Hybrid">See More</a>
                                    </div>
                                </div>

                                <div class="col-lg-8">
                                    <div class="full margin_top_50_rs">
                                        <img class="img-responsive" src={car} alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay">

                    </div>
                </section>
            </>
        )
    }
}

export default CarSection
