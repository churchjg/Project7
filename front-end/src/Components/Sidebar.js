import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


function Sidebar(props) {
    return (
        <Nav style={{ padding: "30px 10px", backgroundColor: "#F5F5F5"/* , height: "100%"  */ }}>
            <Nav.Item>
                <h4 style={{ textDecoration: "underline" }}>Browse Recipes</h4>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/name/random" onClick={() => props.setMealId}>Random Recipe</Nav.Link>
                <Nav.Link as={Link} to="/name/" onClick={() => props.setNameId}>Dishes</Nav.Link>
                <Nav.Link as={Link} to="/video/" onClick={() => props.selectList("video")}>Videos</Nav.Link>
                <Nav.Link as={Link} to="/category/" onClick={() => props.selectList("category")}>Categories</Nav.Link>
                <Nav.Link as={Link} to="/area/" onClick={() => props.selectList("area")}>Food by Country</Nav.Link>
                <h3>Advanced</h3>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar