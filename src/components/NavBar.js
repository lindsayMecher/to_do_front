import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    background-color: #612da1;
  }

  a {
    color: #FFF;
  }

  .logo{
    font-family: Goudy Old Style;
  }

  a:hover {
     color: #612da1;
  }

  .logout-btn {
    color: white;

    &:hover {
      color: white;
    }
  }

  .navbar-brand, .navbar-nav, .nav-link {
    color: white;

    &:hover {
      color: white;
    }
  }
  `;

class NavBar extends React.Component{
    render(){
        return(
            <Styles>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">myTO-DO</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/todos">To-Dos</Nav.Link>
                    </Nav>
                </Navbar>
            </Styles>
        )
    }
};

export default NavBar;