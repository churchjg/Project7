import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'

let url = "https://getcookingwithjon.herokuapp.com/"


export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
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
                    , recipes: (res.splice(0, 20))
                })
            })

    }
    componentDidMount = () => {
        this.fetchCatList()
    }

    render() {
        return (
            <Container>
                <Col>
                    <div style={{ overflow: "scroll", paddingLeft: 20, textAlign: "center" }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, textAlign: "center" }}>
                            <h2>Categories:</h2>
                            {this.state.recipes.map(recipe => <li>{recipe.category}</li>)}
                        </ul>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Category