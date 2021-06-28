import React, { Component } from 'react'
import axios from 'axios';
import Container from "react-bootstrap/Container";
import ElectricCars from './ElectricCars';
import HybridCars from './HybridCars'
const serverUrl = process.env.SERVER_URL;
const email = process.env.USER_EMAIL;
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class CarsType extends Component {
    constructor(props){
        super(props)
        this.state={
            allCars:[],
            electricCars: [],
            hybridCars:[],
        }
    }
    componentDidMount = () => {
        axios
          .get(`${serverUrl}/cars?email=${email}`)
          .then((response) => {
            this.setState({
              allCars: response.data.cars,
            });
          })
          .catch((error) => {
            alert(error.message);
          });
    };  
    
    electricCarsSection = (type) => {
      let filteredCars = this.state.allCars;
      filteredCars = this.state.allCars.filter (car => car.type === 'Electric');
      console.log(filteredCars)
      this.setState({
        electricCars: filteredCars,
      })
    };

    hybridCarsSection = (type) => {
      let filteredCars = this.state.allCars;
      filteredCars = this.state.allCars.filter (car => car.type === 'Hybrid');
      console.log(filteredCars)
      this.setState({
        hybridCars: filteredCars,
      }) 
    };

    // hybridCarsSection = (type) => {
    //     const selectedCars = this.state.allCars.find ((car) => car.type === 'hybrid')
    //     console.log(selectedCars)
    //     this.setState({
    //         hybridCars: selectedCars,
    //       });
    // };
    render() {
        return (
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {this.state.electricCars.map((car) => {
              return (
                <Col>
                  <ElectricCars
                    name={car.name}
                    type={car.type}
                    company={car.company}
                    color={car.color}
                    image_url={car.image_url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container>
        <Row xs={1} md={3} className="g-4">
            {this.state.hybridCars.map((car) => {
              return (
                <Col>
                  <HybridCars
                    name={car.name}
                    type={car.type}
                    company={car.company}
                    color={car.color}
                    image_url={car.image_url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    )     
}
}
export default CarsType
