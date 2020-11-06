import React, { Component } from 'react'



export class Meal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ""
            , name: ''
            , image: ''
            , category: ''
            , tags: ''
            , instructions: ''
            , area: ''
            , video: ''
            , ready: false
        }
    }

    componentDidMount(props) {

    }
    render() {
        return (
            <div>
                yo
            </div>
        )
    }
}

export default Meal