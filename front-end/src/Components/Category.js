import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Category.css"


let url = "https://getcookingwithjon.herokuapp.com/"


export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
            , categories: []
        }
    }



    shuffleCat = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    fetchCatList = () => {
        fetch(`${url}category/`)
            .then(res => res.json())
            .then(res => {
                res = this.shuffleCat(res)
                this.setState({
                    ready: true
                    , recipes: (res.splice(0, 25))
                })
                this.removeDuplicates()
            })

    }
    componentDidMount = () => {
        this.fetchCatList()
    }

    removeDuplicates = () => {
        const array = []
        this.state.recipes.map(recipe =>
            array.push(recipe.category)
        )

        const newData = new Set(array)
        const backToArray = [...newData]
        console.log(backToArray)
        this.setState({
            categories: backToArray
        })

    }

    render() {
        return (
            <Container className="container">
                <Row>
                <Col>
                
                    <div style={{ paddingLeft: 20, textAlign: "center" }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, textAlign: "center" }}>
                            <h2>Categories:</h2>
                        </ul>

                    <li className="cat-column">
                        {this.state.categories}
                    </li>
                    </div>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default Category