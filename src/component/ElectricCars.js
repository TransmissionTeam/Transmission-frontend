import React, { Component } from 'react'
// import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export class ElectricCars extends Component {

    render() {
        return (
            <>
                <Card>
                    <Card.Img variant="top" src={this.props.img_url} alt='car' />
                    <Card.Body>
                    <Card.Title>{this.props.color}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    </Card.Body>
                </Card> 
            </>
        )
    }
}
export default ElectricCars;
