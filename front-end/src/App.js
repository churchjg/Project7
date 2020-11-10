import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import TopNav from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Meal from './Components/Meal'
import Homepage from './Components/Homepage'
import { Route, Link } from 'react-router-dom'
import List from './Components/List'
import MealList from './Components/MealList'


let url = "https://getcookingwithjon.herokuapp.com/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      browseSelection: ""
      , dropdownSelection: ""
      , formInput: ""
      , mealId: ""
    }
  }

  selectList = listName => {
    this.setState({
      browseSelection: listName
    })
  }

  setDropdown = selection => {
    this.setState({
      dropdownSelection: selection
    })
  }

  setFormSelection = input => {
    this.setState({
      dropdownSelection: input.dropdown
      ,formInput: input.input
    })
  }

  setmealId = id => {
    this.setState({
      mealId: id
    })
  }
/*
  fetchRandomMeal = () => {
    fetch(`${url}name/random`)
      .then(res => res.json())
      .then(res => {
        let min = 0
        let max = res.length -1
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(res[random])
        this.setState({
          mealId: res[random]
        })
      })
  }
  */

  render(routerProps) {
    return (
      <Container fluid >
        <Row className="App-header">
          <Col>
            <TopNav dropdownSelection={this.setDropdown} sendInput={this.setFormSelection} routerProps={routerProps} />
          </Col>
        </Row>
        <Row>
          <Col xs="2" id="sidebar">
            <Sidebar selectList={this.selectList} setId={this.fetchRandomMeal} />
          </Col>
          <Col >
            <Route path="/"
              component={Homepage}
              exact />
            <Route path={`/name/${this.state.browseSelection}`}
              render={() => <List listName={this.state.browseSelection} url={url} />}
              exact
            />
            <Route path="/name/random"
              render={() => <Meal url={url} id={this.state.mealId} />}
              exact
            />
            <Route path={`/name/id/${this.state.formInput}`}
            render={() => <Meal url={url} id={this.state.formInput} />} 
            exact
          />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
