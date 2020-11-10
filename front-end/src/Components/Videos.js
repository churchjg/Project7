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
    shuffleVid = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    fetchVidList = () => {
        fetch(`${url}video/`)
            .then(res => res.json())
            .then(res => {
                res = this.shuffleVid(res)
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
                    <div style={{ overflow: "scroll", paddingLeft: 20, textAlign: "center" }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, textAlign: "center" }}>
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