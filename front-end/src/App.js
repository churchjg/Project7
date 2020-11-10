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
import Category from './Components/Category'
import Areas from './Components/Areas'
import Videos from './Components/Videos'
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
            <Sidebar selectList={this.selectList} setMealId={this.fetchRandomMeal} setNameId={this.fetchNameList} setCatId={this.fetchCatList}
            setAreaId={this.fetchAreaList} setVidId={this.fetchVidList} setHomeId={this.fetchHomeList} />
          </Col>
          <Col >
            <Route path="/"
             
              exact />
              <Route path={`/Home/${this.state.browseSelection}`}
              render={() => <Homepage listName={this.state.browseSelection} url={url} setHomeId={this.state.recipes} />}
              exact />
            <Route path={`/name/${this.state.browseSelection}`}
              render={() => <List listName={this.state.browseSelection} url={url} setNameId={this.state.recipes} />}
              exact
            />
            <Route path={`/category/${this.state.browseSelection}`}
              render={() => <Category listName={this.state.browseSelection} url={url} setCatId={this.state.recipes} />}
              exact
            />
             <Route path={`/area/${this.state.browseSelection}`}
              render={() => <Areas listName={this.state.browseSelection} url={url} setAreaId={this.state.recipes} />}
              exact
            />
             <Route path={`/video/${this.state.browseSelection}`}
              render={() => <Videos listName={this.state.browseSelection} url={url} setVidId={this.state.recipes} />}
              exact
            />
            <Route path="/name/random"
              render={() => <Meal url={url} setMealid={this.state.mealId}/>}
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
