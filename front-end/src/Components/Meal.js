import React, { Component } from 'react'
//import { json } from 'body-parser'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ImageGallery from './ImageGallery'
import { Route, } from 'react-router-dom'
import Homepage from './Homepage'


export class Meal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ""
            , name: ''
            , image: ''
            , category: ''
            , tags: ''
            , instructions: ''
            , area: ''
            , video: ''
            , ready: false
        }
    }
    

    fetchMeal = () => {
        fetch(`${this.props.url}/name/${this.props.id}`)
            .then(res => res.json())
            .then(res =>{
                this.setState({
            id: res.id
            , name: res.name
            , image: res.image
            , category: res.category
            , tags: res.tags
            , instructions: res.instructions
            , area: res.area
            , video: res.video
        })
    })
}
componentDidMount = () => {
    this.fetchMeal() 
}

componentDidUpdate = props => {
    if (props.id !== this.props.id){
        this.fetchMeal()
    }
}


  render() {
      if (this.state.ready === true) {
          return (
              <Container className="justify-content-center">
              <Row className="justify-content-center">
                      <h2>{this.state.name}  </h2>{this.state.name === true ? <h4><Badge variant="primary">  Recipe</Badge></h4> : null}
              </Row>
              <Row sm>
              {this.state.tags === true ? <h5><Badge variant="primary">  Tags</Badge></h5> : null}
                  <Col xs="4" />
                  <Col>
                      <Image fluid src={this.state.image} />
                  </Col>
                  <Col xs="4" />
              </Row>
              <Row className="justify-content-center">
                       {this.state.category !== "" && this.state.category !== undefined ? <h5>Categories: {this.state.category}</h5> : null} 
                    </Row>
                    <Row className="justify-content-center">
                       {this.state.area !== "" && this.state.area !== undefined ? <h4>Culture: {this.state.area}</h4> : null} 
                    </Row>
                    <Row className="justify-content-center">
                       {this.state.instructions !== "" && this.state.instructions !== undefined ? <h4>Cooking Instructions: {this.state.instructions}</h4> : null} 
                    </Row>
                    <Row className="justify-content-center">
                       {this.state.video !== "" && this.state.video !== undefined ? <h4>Media: {this.state.video}</h4> : null} 
                    </Row>
              </Container>
          )} else { return null }
  }
}


export default Meal