import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'

let url = "https://getcookingwithjon.herokuapp.com/"


export class Videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
        }
    }

   
    fetchVidList = () => {
        fetch(`${url}video/`)
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
        this.fetchVidList() 
    }

    render() {
        return (
            <Container>
                <Col>
                    <div style={{ overflow: "scroll", paddingLeft: 20 }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20 }}>
                            <h2>Learn with Some Pro Chefs!</h2>
                            {this.state.recipes.map(recipe => <li>{recipe.name}{`      -->      `}{recipe.video}</li>)}
                        </ul>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Videos