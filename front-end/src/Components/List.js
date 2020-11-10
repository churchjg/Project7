import React, { Component } from 'react'
let url = "https://getcookingwithjon.herokuapp.com/"

export class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
            , ready: false
        }
    }

    fetchMealNames = () => {
        fetch(`${url}name/`)
            .then(res => res.json())
            .then(res => {
                let min = 0
                let max = res.length - 1
                let random = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(res[random])
                this.setState({
                    ready: true
                    , nameId: res[random]
                })
            })
    }
    componentDidMount = () => {
        this.fetchMealNames()
    }
    render() {
        if (this.state.ready === true) {
            console.log(this.state.nameId.name)
            return (
                <div style={{ overflow: "scroll", paddingLeft: 20 }}>
                    <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20 }}>
                        {this.state.nameId}
                    </ul>
                </div>
            )
        } else { return null }
        /*
                componentDidMount() {
                    
                    let listName = ""
                    if (this.props.listName !== "") {
                        listName = this.props.listName
                    }
                    else {
                        listName = localStorage.getItem("listName")
                    }
        
                    fetch(`${this.url}name/${listName}`)
                        .then(res => res.json())
                        .then(res => {
                            this.setState({
                                recipes: res.name
                            })
                        })
                    localStorage.setItem("listName", `${this.props.listName}`)
                }
        
        
                componentDidUpdate(props) {
                    if (props.listName !== this.props.listName) {
        
                        fetch(`${this.url}name/${this.props.listName}`)
                            .then(res => res.json())
                            .then(res => {
                                this.setState({
                                    recipes: res.name
                                })
                            })
        
                        localStorage.setItem("listName", `${this.props.listName}`)
                    }
                }
        
                setList() {
                    let listRecipes = this.state.recipes.map((val, idx) => {
                        let newRecipe
                        if (val !== "") {
                            newRecipe = <li key={idx}>{val}</li>
                        }
                        return newRecipe
                    })
                    return listRecipes
                }
        
                render() {
                    return (
                        <div style={{ overflow: "scroll", paddingLeft: 20 }}>
                            <ul style={{ listStyle: "none", fontSize: "20px", paddingTop: 20 }}>
                                {this.setList()}
                            </ul>
                        </div>
                    )
                }
            } */
    }
}
export default List