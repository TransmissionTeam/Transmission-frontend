import React, { Component } from 'react'
import CarDesignElectric from './CarDesignElectric'
// import CarouselsCar from './CarouselsCar'
import ElectricSec from './ElectricSec'

export class Electric extends Component {
    render() {
        // console.log(this.props.carsInfo);
        // console.log(this.props.userName);
        return (
            <div>
                {/* <CarouselsCar /> */}
                <CarDesignElectric />
                <ElectricSec

                    electricCars={this.props.electricCars}
                    userEmail={this.props.userEmail}
                />

            </div>
        )
    }
}

export default Electric
