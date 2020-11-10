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

    fetchNameList = () => {
        fetch(`${url}name/`)
            .then(res => res.json())
            .then(res => {
                //make sure to randomize res array

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
                    <div style={{ overflow: "scroll", paddingLeft: 20 }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20 }}>
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