import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

let url = "https://getcookingwithjon.herokuapp.com/"

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
    }
    shuffleHome = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    
    fetchHomeList = () => {
        fetch(`${url}Home/`)
            .then(res => res.json())
            .then(res => {
                res = this.shuffleHome(res)
                this.setState({
                    ready: true
                    , recipes: res.splice(0, 6)
                })
            })

    }
    componentDidMount = () => {
        this.fetchHomeList()
    }


   
    render() {
        return (
            <Container className="justify-content-center">
                <div style={{ padding: 0, textAlign: "center" }}>
                    <h1>Welcome! Lets Get Cooking</h1>
                    <h2 style={{textDecoration: "underline"}}>Some Top Recipes</h2>
                </div>
                {this.state.recipes.map(recipe =>
                    <Col>
                        <Row className="justify-content-center">
                            <h3>{recipe.name} {` - `} {`(`} {recipe.category} {`)`}</h3>
                        </Row>
                        <Row sm>
                            <Col xs="4" />
                            <Col>
                                <Image fluid src={recipe.image} />
                            </Col>
                            <Col xs="4" />
                        </Row>
                    </Col >
                )
                }
            </Container >
        )
    }
}

export default Homepage