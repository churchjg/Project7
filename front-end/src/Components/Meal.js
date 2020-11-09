import React, { Component } from 'react'
import { json } from 'body-parser'
// import { Container, Row, Col, Badge } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
import ImageGallery from './ImageGallery'
import { Route, Link } from 'react-router-dom'
import Homepage from './Homepage'


let url = "https://getcookingwithjon.herokuapp.com/"

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
    componentDidMount() {
        fetch(`${url}`)
            .then(res => res.json())
            .then(res => {
                this.data = res
                console.log(res)
                this.setState({
                    ready: true
                })
            })
    }

    fetchMeal = (id, name, image, category, tags, instructions, area, video, url) => {
        this.setState({
            id: id
            , name: name
            , image: image
            , category: category
            , tags: tags
            , instructions: instructions
            , area: area
            , video: video
            , url: url
        })
    }

    renderHomepage = () => {
        if (this.state.ready === true) {
            return (
                <Route path="/"
                    render={() => <Homepage meal={this.data} fetchMeal={this.fetchMeal} />}
                    exact
                />
            )
        } else { return <h1>Page Loading....</h1> }
    }

    render() {
        return (
            <main>
                {this.renderHomepage()}
                <Route exact path={`/name/${this.state.id}`}
                    render={(routerProps) => <Meal info={this.state}
                        {...routerProps}
                    />}
                />
            </main>
        )
    }

    /*

  fetchMeal = () => {
      fetch(`${this.props.url}name/:id${this.props.id}`)
          .then(res => res.json())
          .then(data => {
              this.setState({
                  id: data._id
                  , name: data.name
                  , image: data.image
                  , category: data.category
                  , tags: data.tags
                  , instructions: data.instructions
                  , area: data.area
                  , video: data.video
              })
          })
  }
  componentDidMount = () => {
      this.fetchMeal()
  }

  componentDidUpdate = props => {
      if (props.id !== this.props.id) {
          this.fetchMeal()
      }
  }


  render() {
      if (this.state.ready === true) {
          return (
              <Container className="justify-content-center">
              <Row className="justify-content-center">
                      <h2>{this.state.name}  </h2>{this.state.name === true ? <h4><Badge variant="primary">  Recipe</Badge></h4> : null}
              </Row>
              <Row sm>
              {this.state.tags === true ? <h5><Badge variant="primary">  Tags</Badge></h5> : null}
                  <Col xs="4" />
                  <Col>
                      <Image fluid src={this.state.image} />
                  </Col>
                  <Col xs="4" />
              </Row>
              </Container>
          )} else { return null }
  }
}
*/
}
export default Meal