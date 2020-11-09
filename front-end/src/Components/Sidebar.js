import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'


function Sidebar(props) {
    return (
        <Nav>
            <Nav.Item>
                <h3>Browse Recipes</h3>
                <Nav.Link as={Link} to="name/" onClick={() => props.selectList("name")}>Dishes</Nav.Link>
                <Nav.Link as={Link} to="video/" onClick={() => props.selectList("video")}>Videos</Nav.Link>
                <Nav.Link as={Link} to="category/" onClick={() => props.selectList("category")}>Categories</Nav.Link>
                <Nav.Link as={Link} to="area/" onClick={() => props.selectList("area")}>Food by Country</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar