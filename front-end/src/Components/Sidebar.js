import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


function Sidebar(props) {
    return (
        <Nav style={{ padding: "50px 40px", backgroundColor: "#F5F5F5" ,   }}>
            <Nav.Item>
                <h4 style={{ textDecoration: "underline" }}>Browse Recipes</h4>


                <Nav.Link as={Link} to="/Home" onClick={() => props.setMealId}>Home</Nav.Link>
                <Nav.Link as={Link} to="/name/random" onClick={() => props.setMealId}>Random Recipe</Nav.Link>
                <Nav.Link as={Link} to="/name/" onClick={() => props.selectList}>Dishes</Nav.Link>
                <Nav.Link as={Link} to="/video/" onClick={() => props.selectList}>Videos</Nav.Link>
                <Nav.Link as={Link} to="/category/" onClick={() => props.selectList}>Categories</Nav.Link>
                <Nav.Link as={Link} to="/area/" onClick={() => props.selectList}>Food by Country</Nav.Link>

                <h4 style={{ textDecoration: "underline" }}>Advanced Options</h4>
                <Nav.Link as={Link} to="/foodInfo/" >Add a New Recipe</Nav.Link>
                <Nav.Link as={Link} to="/foodAddInfo/add" >Update a Recipe</Nav.Link>
                <Nav.Link as={Link} to="/foodDelInfo/delete" >Delete a Recipe</Nav.Link>
                </Nav.Item>
        </Nav>
    )
}

export default Sidebar