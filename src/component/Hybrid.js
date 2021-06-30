import React, { Component } from 'react'
import CarDesign from './CarDesign'

import HybridSec from './HybridSec'

export class Hybrid extends Component {
    render() {

        return (
            <div>
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
