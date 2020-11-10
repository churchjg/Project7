import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'

let url = "https://getcookingwithjon.herokuapp.com/"


export class Areas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
        }
    }

   
    fetchAreaList = () => {
        fetch(`${url}areas/`)
            .then(res => res.json())
            .then(res => {
                //make sure to randomize res array
                this.setState({
                    ready: true
                    , recipes: /*this.removeDuplicates */(res.splice(0, 20))
                })
            })

    }
    componentDidMount = () => {
        this.fetchAreaList() 
    }

    render() {
        return (
            <Container>
                <Col>
                    <div style={{ overflow: "scroll", paddingLeft: 20, textAlign: "center"}}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, textAlign: "center"}}>
                            <h2>Food By Country:</h2>
                            {this.state.recipes.map(recipe => <li>{recipe.area}</li>)}
                        </ul>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Areas