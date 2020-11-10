import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Row, Col, FormControl} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import SearchForm from './SearchForm'
function TopNav(props){


    return(
            
            <Navbar>
                <style type="text/css">
                    {`
                    .navbar {
                        background-color: red;
                        margin: 0, auto;
                    }
                    `}
                </style>
                <Navbar.Brand>Get Cooking!</Navbar.Brand>

                <SearchForm sendInput={props.sendInput}/>
                
            </Navbar>
    )
}
export default TopNav