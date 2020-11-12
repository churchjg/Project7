
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SearchForm from './Forms/SearchForm'
import { Link } from 'react-router-dom'
import bgImage from '../../src/Images/balogo.png'

function NavBar(props) {

    return (
        <Navbar style={{ height: "100%", backgroundRepeat: "no-repeat", paddingLeft: 40 , borderBottom: "3px solid #333333", backgroundImage: `url(${bgImage})`, backgroundPosition: "cover" }} className="justify-content-between">
            <Navbar.Brand as={Link} to="/" style={{ color: "red" }}></Navbar.Brand>
            <Navbar.Text style={{ color: "red" , paddingTop: 50 , textAlign: "bottom" }}><h2>Cooking with Jon</h2></Navbar.Text>

            <SearchForm sendInput={props.sendInput} />

        </Navbar>
    )
}

export default NavBar