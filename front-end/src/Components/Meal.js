import React, { Component } from 'react'
//import { json } from 'body-parser'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ImageGallery from './ImageGallery'
import { Route, } from 'react-router-dom'
import Homepage from './Homepage'



let url = "https://getcookingwithjon.herokuapp.com/"

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

    /*
        fetchMeal = () => {
            fetch(`${this.props.url}name/${this.props.id}`)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        id: res.id
                        , name: res.name
                        , image: res.image
                        , category: res.category
                        , tags: res.tags
                        , instructions: res.instructions
                        , area: res.area
                        , video: res.video
                        , ready: true
                    })
                })
        }
        */
    fetchRandomMeal = () => {
        fetch(`${url}name/random`)
            .then(res => res.json())
            .then(res => {
                let min = 0
                let max = res.length - 1
                let random = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(res[random])
                this.setState({
                    ready: true
                    , mealId: res[random]
                })
            })
    }
    componentDidMount = () => {
        this.fetchRandomMeal()
    }

    componentDidUpdate = props => {
        if (props.id !== this.props.id) {
            this.fetchRandomMeal()
        }
    }

    render() {

        if (this.state.ready === true) {
            return (
                <Container className="justify-content-center">
                    <Row className="justify-content-center">
                        <h2>{this.state.mealId.name}  </h2>{this.state.mealId.name === true ? <h4><Badge variant="primary">  Recipe</Badge></h4> : null}
                    </Row>
                    <Row sm>
                        {this.state.mealId.tags === true ? <h5><Badge variant="primary">  Tags</Badge></h5> : null}
                        <Col xs="4" />
                        <Col>
                            <Image fluid src={this.state.mealId.image} />
                        </Col>
                        <Col xs="4" />
                    </Row>
                    <Row className="justify-content-center">
                        {this.state.mealId.category !== "" && this.state.mealId.category !== undefined ? <h5>Categories: {this.state.mealId.category}</h5> : null}
                    </Row>
                    <Row className="justify-content-center">
                        {this.state.mealId.area !== "" && this.state.mealId.area !== undefined ? <h5>Culture: {this.state.mealId.area}</h5> : null}
                    </Row>
                    <Row className="justify-content-center">
                        {this.state.mealId.instructions !== "" && this.state.mealId.instructions !== undefined ? <h4>Cooking Instructions:{this.state.mealId.instructions}</h4> : null}
                    </Row>
                    <Row className="justify-content-center">
                        {this.state.mealId.video !== "" && this.state.mealId.video !== undefined ? <h4>Media: {this.state.mealId.video}</h4> : null}
                    </Row>
                </Container>
            )
        } else { return null }
    }

}



export default Meal