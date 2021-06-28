import React, { Component } from 'react'

import "./css/Services.css";
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';

export class Services extends Component {
    render() {
        return (
            <>
                <section class="services">
                    <div class="s-heading">
                        <h1>Why <font color="#4a90e2">US</font> ?!</h1>
                        <p>We Provide The Best Cars For Rent</p>
                    </div>
                    <div class="s-box-container">
                        <div class="s-box">
                            <div class="bar"></div>
                            <img alt="1" src={img1} />
                            <h1>Spend Money</h1>
                            <p>You will spend your money with us but you will take the best services and the best quality.</p>
            
                        </div>
                        <div class="s-box">
                            <div class="bar"></div>
                            <img alt="3" src={img3} />
                            <h1>Security</h1>
                            <p>There will be the greatest degree of safety in terms of procedures to guarantee the rights of the company and the rights of the customer. We are always keen to serve you.</p>
            
                        </div>
                        <div class="s-box">
                            <div class="bar"></div>
                            <img alt="2" src={img2} />
                            <h1>Set Budget</h1>
                            <p>There will be prices according to your ability and budget.</p>
            
                        </div>
 

                    </div>
                </section>
            </>
        )
    }
}

export default Services
