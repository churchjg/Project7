import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class RecipeForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    setType = () =>{
        if (this.props.method === "POST"){
            return <h4>Please enter the details of the recipe you wish to add!</h4>
        }
        if (this.props.method === "PUT"){
            return (<div> <h4>Please enter the details of the recipe to update?</h4>
            <Form.Control type="input" placeholder="Name (required)" name="foodInfo" onChange={this.inputChange} />
            </div>)
        }
        if (this.props.method === "DELETE"){
            return (<div> <h4>Please enter the name of the recipe to delete?</h4>
            <Form.Control type="input" placeholder="Name (required)" name="foodInfo" onChange={this.inputChange} />
            </div>)
        }
        
    }

    setForm = () => {
        if (this.props.method !== "DELETE"){
            return ( <div >
                <Form.Control size="sm" type="input" placeholder="Title" name="title" onChange={this.inputChange} />
                <h5>Is this your recipe?</h5>
                <Form.Check inline size="sm" type="radio" name="isMyOwn" label="Yes"  onClick={() => this.setCheckbox("isMyOwn", true)} />
                <Form.Check inline size="sm" type="radio" name="isMyOwn" label="No"  onClick={() => this.setCheckbox("isMyOwn", false)} />
                <h5>Can we Display this Recipe on Our Page?</h5>
                <Form.Check inline size="sm" type="radio" name="display" label="Yes"  onClick={() => this.setCheckbox("display", true)} />
                <Form.Check inline size="sm" type="radio" name="display" label="No"  onClick={() => this.setCheckbox("display", false)} />
                <Form.Control size="sm" type="input" placeholder="Name of Dish" name="name" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Image" name="image" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Category" name="category" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Tags (Dessert, Side, etc." name="medium" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Cooking Instructions" name="instructions" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Food Ethnicity" name="area" onChange={this.inputChange} />
                <Form.Control size="sm" type="input" placeholder="Video Instructions" name="video" onChange={this.inputChange} />
            </div>)
        }
    }
    

    inputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    setCheckbox = (name, value) =>{
        this.setState({
            [name]: value
        })
    }

    checkImage = (e) => {
        e.preventDefault()
        if (this.state.image){
            let imgArray = this.state.image.split(",")
             let finalArray = imgArray.map(val =>{
                let trimmed = val.trim()
                return trimmed
            })
             this.setState({
                 image: finalArray
             }, () => {this.submitForm(e)})
        } else {this.submitForm(e)}

    }

    
    submitForm = (e) =>{
        
        let url = ""
        if (this.props.method === "POST"){
            url = `https://getcookingwithjon.herokuapp.com/${this.props.type}/`
        }
        else {
            url = `https://getcookingwithjon.herokuapp.com/${this.props.type}/${this.state.name}`
        }
        
        const options = {
            "method": this.props.method
            ,"headers" : { "Content-Type" : "application/json"}
            ,body: JSON.stringify(this.state)
        }

        fetch(url, options)
            .then(res => res.json())
            .then(res =>{
                this.props.onSuccess({
                    newName: res.name
                    ,success: true
                })
            })
    }

    render() {
        return (
            <Form onSubmit={this.checkImage}>
                {this.setType()}
                {this.setForm()}
                <Button style={{marginTop: 20, backgroundColor: "#F5F5F5", color: "#333333", border: "1.5px solid green"}} type="submit" >Submit</Button>
            </Form>
        )
    }
}


export default RecipeForm