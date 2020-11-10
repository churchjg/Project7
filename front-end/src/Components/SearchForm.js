import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'

export class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
            , dropdown: ""
        }
    }

    inputChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            input: evt.target.value
        })
    }

    dropdownChange = evt => {
        this.setState({
            dropdown: evt.target.value
        })
    }

    mealId = evt => {
        this.setState({
            id: evt.target.value
        })
    }

    submitForm = (evt) => {
        evt.preventDefault()
        if (this.state.dropdown !== "" && this.state.input !== "") {
            this.props.sendInput(this.state)
            this.props.history.push(`/name/${this.state.dropdown}/${this.state.input}`)
        }
        else { alert("Please select an area from the dropdown and enter the name of the section you would like to search.") }
    }

    render() {
        return (
            <Form inline onSubmit={this.submitForm}>
                <Form.Control style={{ margin: 10 }} size="sm" as="select" title="Narrow Your Search" id="basic-nav-dropdown" onChange={this.dropdownChange}>
                    <option>Narrow Your Search</option>
                    <option value="name">Name</option>
                    <option value="tags">Tags</option>
                    <option value="category">Categories</option>
                    <option value="area">Cultures</option>
                </Form.Control>
                <Form.Control style={{margin: 5} } size="sm" type="input" onChange={this.inputChange} />
                <Button style={{margin: 10, backgroundColor: "#F5F5F5", color: "#333333", border: "none"}} size="sm" type="submit" >Search</Button>
            </Form>
        )
    }
}

export default withRouter(SearchForm)