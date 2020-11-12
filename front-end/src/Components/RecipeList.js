import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class  RecipeList extends Component {
    constructor(props){
        super(props)
        this.state = {
             recipes: []
            ,ready: false
        }
        this.input = ""
        this.dropdown = ""
    }

    fetchData = () => {
        fetch(`${this.props.url}name/${this.dropdown}${this.input}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    recipes: res
                    ,ready: true
                })
            })

    }

    displayRecipeList = () =>{

        let list = this.state.recipes.map(recipe => {
            return <Link to={`name/${recipe.name}`} ><li onClick={()=> this.props.setId(recipe.name, "name")}>{recipe.image}</li></Link>
        })

        return list
    }
    componentDidMount = () =>{
        if (this.props.input !== ""){
            this.input = this.props.input
            this.dropdown = this.props.dropdown
            
        }
        else {
            this.input = localStorage.getItem("formInput")
            this.dropdown = localStorage.getItem("dropdown")
        }
        this.fetchData()
        localStorage.setItem("formInput", `${this.props.input}`)
        localStorage.setItem("dropdown",`${this.props.dropdown}`)
    }

    componentDidUpdate= props => {
        if (props.input !== this.props.input){
            this.fetchData()
            localStorage.setItem("formInput", `${this.props.id}`)
            localStorage.setItem("dropdown",`${this.props.dropdown}`)
        }

    }

    render() {
        if (this.state.ready === true){
        return (
            <div>
                <ul style={{listStyle: "none", fontSize: "20px", paddingTop: 20}} >
                    {this.displayRecipeList()}
                </ul>
            </div>
        )
        } else {return null}
    }
}

export default  RecipeList