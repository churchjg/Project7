import React, { Component } from 'react'

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
                let min = 1
                let max = res.length - 1
                let random = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(res[random])
                this.setState({
                    ready: true
                    , recipes: res[random]
                })
            })
        localStorage.setItem("listName", `${this.props.listName}`)
    }
    componentDidMount = () => {
        for (let i = 0; i < 20; i++) {
        this.fetchNameList()
    }
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
            <div style={{ overflow: "scroll", paddingLeft: 20 }}>
                <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20 }}>
                    <h2>Some Great Dishes:</h2>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                        <li>{this.state.recipes.name}</li>
                </ul>
            </div>
        )
    }
}

export default List