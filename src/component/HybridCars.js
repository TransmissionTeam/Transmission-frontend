import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class HybridCars extends Component {
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

export default HybridCars
