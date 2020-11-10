
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import bgImage from '../../src/Images/balogo.png'

function TopNav(props) {

    return (
        <Navbar style={{ height: "100%", backgroundRepeat: "no-repeat", borderBottom: "3px solid #333333", backgroundImage: `url(${bgImage})`, backgroundPosition: "cover" }} className="justify-content-between">
            <Navbar.Brand as={Link} to="/" style={{ padding: 20, color: "red" }}></Navbar.Brand>
            <Navbar.Text style={{ color: "red" , textAlign: "center", fontDecoration: "underline" }}><h1>Cooking with Jon</h1></Navbar.Text>

            <SearchForm sendInput={props.sendInput} />

        </Navbar>
    )
}

export default TopNav