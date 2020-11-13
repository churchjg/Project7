import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import NavBar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Meal from './Components/Meal'
import Homepage from './Components/Homepage'
import { Route } from 'react-router-dom'
import List from './Components/List'
import Category from './Components/Category'
import Areas from './Components/Areas'
import Videos from './Components/Videos'
import SubmissionForm from './Components/Forms/SubmissionForm'
import RecipeList from './Components/RecipeList'


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
    this.path = window.location.pathname
  }

  setStateFromUrl = () =>{
    let pathArray = this.path.split('/')
    pathArray = pathArray.filter(val => (val !== ""))
    if (pathArray[1] === "random"){
      this.fetchRandomMeal()
    }
    if (pathArray[2] === "list"){
      this.setState({
        browseSelection: pathArray[1]
      })
    }
    if (pathArray[1] === "name"){
      this.setState({
        dropdownSelection: "name"
        ,formInput: pathArray[2]
      })
    }
  }
  componentDidMount = () =>{
    this.setStateFromUrl()
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
      , formInput: input.input
    })
  }

  setmealId = id => {
    this.setState({
      mealId: id
    })
  }

  selectList = listName => {
    this.setState({
      browseSelection: listName
    })
  }

  setDropdown = selection =>{
    this.setState({
      dropdownSelection: selection
    })
  }

  setFormSelection = (input, optional) =>{
    if (input.input !== undefined){
    this.setState({
      dropdownSelection: input.dropdown
      ,formInput: input.input
    })    
  }
  else {
    this.setState({
      formInput: input
      ,dropdownSelection: optional
    })
  }
  }

  

  render() {
    return (
      <Container fluid style={{ padding: 0 }} >
      <Row style={{height: "25%"}} > 
        <Col >
          <NavBar dropdownSelection={this.setDropdown} sendInput={this.setFormSelection} />
        </Col>
      </Row>
        <Row style={{height: "85%", marginTop: 15}} noGutters >
        <Col xs="2" style={{marginTop: 20}}>
            <Sidebar selectList={this.selectList} setMealId={this.fetchRandomMeal}  />
          </Col>
          <Col style={{height: "95%" ,overflow: "scroll"}}>
            <Route path="/"
              render={() => <Homepage listName={this.state.browseSelection} url={url} setHomeId={this.state.recipes} />}
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
              render={() => <Meal url={url} setMealId={this.state.mealId} />}
              exact
            />
            <Route path={`/Home/${this.state.dropdownSelection}/${this.state.formInput}`}
              render={() => {
                if (this.state.dropdownSelection === "id") {
                  return <Meal url={url} id={this.state.formInput} />
                }
                else {
                  return <RecipeList url={url} dropdown={this.state.dropdownSelection} input={this.state.formInput} setId={this.setFormSelection} />
                }
              }
              } />
             <Route path="/foodInfo/"
            render={() => <SubmissionForm  method="POST"/>}
            />
            <Route path="/foodInfo/:add"
            render={() => <SubmissionForm  method="PUT"/>}
            />
            <Route path="/foodInfo/:delete"
            render={() => <SubmissionForm  method="DELETE" />}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
