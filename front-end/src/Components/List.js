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

        let listName = ""
        if (this.props.listName !== "") {
            listName = this.props.listName
        }
        else {
            listName = localStorage.getItem("listName")
        }

        fetch(`${this.url}${listName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    recipes: data
                })
            })
    }

    /*
    fetch(`${this.url}`)
    .then(res => res.json())
    .then(data => {
        let theMeals = {
            id: data._id
            , name: data.name
            , image: data.image
            , category: data.category
            , tags: data.tags
            , instructions: data.instructions
            , area: data.area
            , video: data.video
            let foods = this.state.recipes
        }
    foods.push(theMeals)
    this.setState({
                recipes: foods
            })
        })
}
*/
componentDidUpdate(props) {
    if (props.listName !== this.props.listName) {
        console.log(props.listName)
        console.log(this.props.listName)
        fetch(`${this.url}${this.props.listName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    recipes: data
                })
            })

        localStorage.setItem("listName", `${this.props.listName}`)
    }
}

    /*setList(){
        let listRecipes = this.state.recipes.map((val, idx) => {
            if (val !== ""){
            return <li key={idx}>{val}</li>
            }
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
    */
}

export default List