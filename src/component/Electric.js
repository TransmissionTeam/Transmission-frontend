import React, { Component } from 'react'
import CarouselsCar from './CarouselsCar'
import ElectricSec from './ElectricSec'

export class Electric extends Component {
    render() {
        // console.log(this.props.carsInfo);
        // console.log(this.props.userEmail);
        return (
            <div>
                <CarouselsCar />
                <ElectricSec

                    electricCars={this.props.electricCars}
                    userEmail={this.props.userEmail}
                />

            </div>
        )
    }
}

export default Electric
