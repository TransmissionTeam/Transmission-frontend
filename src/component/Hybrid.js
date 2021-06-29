import React, { Component } from 'react'
import CarDesign from './CarDesign'

// import CarouselsCarHybrid from './CarouselsCarHybrid'
import HybridSec from './HybridSec'

export class Hybrid extends Component {
    render() {

        return (
            <div>
                {/* <CarouselsCarHybrid /> */}
                <CarDesign />
                <HybridSec

                    haybridCars={this.props.haybridCars}
                    userEmail={this.props.userEmail}

                />
            </div>
        )
    }
}

export default Hybrid
