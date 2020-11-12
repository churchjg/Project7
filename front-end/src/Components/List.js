import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'

let url = "https://getcookingwithjon.herokuapp.com/"


export class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
        }
    }

    shuffleList = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    fetchNameList = () => {
        fetch(`${url}name/`)
            .then(res => res.json())
            .then(res => {
                res = this.shuffleList(res)
                this.setState({
                    ready: true
                    , recipes: res.splice(0, 20)
                })
            })

    }

    componentDidMount = () => {
        this.fetchNameList()
    }
    /*
        componentDidUpdate(props) {
            if (props.listName !== this.props.listName) {
     
                fetch(`${this.url}name/${this.props.listName}`)
                    .then(res => res.json())
                    .then(res => {
                        this.setState({
                            recipes: res
                        })
                    })
     
                localStorage.setItem("listName", `${this.props.listName}`)
            }
        }
        */

    render() {
        return (
            <Container>
                <Col>
                    <div style={{ textAlign: "center" }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, paddingBottom: 20 }}>
                            <h2>Some Great Dishes:</h2>
                            {this.state.recipes.map(recipe => <li>{recipe.name}</li>)}
                        </ul>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default List