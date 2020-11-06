import React, { Component } from 'react'

export class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: this.props.listName
            , recipes: []
        }
        this.url = this.props.url
    }

    componentDidMount() {

        fetch(`${this.url}/${this.props.listName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    recipes: data
                })
            })
    }

    componentDidUpdate(props) {
        if (props.listName !== this.props.listName) {
            fetch(`${this.url}/${this.props.listName}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        recipes: data
                    })
                })
        }
    }


    setList() {
        let listRecipes = this.state.recipes.map((val, idx) => {
            return <li key={idx}>{val}</li>
        })
        return listRecipes
    }

    render() {
        return (
            <div>
                {this.setList()}
            </div>
        )
    }
}

export default List