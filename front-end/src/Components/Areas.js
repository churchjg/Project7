import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'

let url = "https://getcookingwithjon.herokuapp.com/"


export class Areas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
            , areas: []
        }
    }

    shuffleArea = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    fetchAreaList = () => {
        fetch(`${url}areas/`)
            .then(res => res.json())
            .then(res => {
                res = this.shuffleArea(res)
                this.setState({
                    ready: true
                    , recipes: (res.splice(0, 18))
                })
                this.removeDuplicates()
            })

    }
    componentDidMount = () => {
        this.fetchAreaList()
    }

    removeDuplicates = () => {
        const array = []
        this.state.recipes.map(recipe =>
            array.push(recipe.area)
        )

        const newData = new Set(array)
        const backToArray = [...newData]
        console.log(backToArray)
        this.setState({
            areas: backToArray
        })

    }

    render() {
        return (
            <Container>
                <Col>
                    <div style={{ textAlign: "center" }}>
                        <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, textAlign: "center" }}>
                            <h2>Food By Country:</h2>
                            <li style={{ listStyle: "none", fontSize: "20px", paddingTop: 20, textAlign: "center" }}>
                                {this.state.areas}
                            </li>
                        </ul>
                    </div>
                </Col>
            </Container>
        )
    }
}

export default Areas