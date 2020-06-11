import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

    constructor(){
        super()
        this.state = {
            token: null
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        // check if token is valid, if it is then render log out
        // if token is invalid, render login
        if(!token){
            this.setState({
                token: null
            })
        } else {
            console.log(localStorage)
        }
    }

    renderLogOut = () => {
        return(
            <Button>
                <Link to="/login" onClick={this.handleLogOut} >
                    Log Out
                </Link>
            </Button>
        )
    }

    renderLogIn = () => {
        // when clicked, send to login path
        return(
            <Button>
                <Link to="/login">
                    Log In
                </Link>
            </Button>
        )
    }

    handleLogOut = () => {
        console.log("hello")
        this.props.logoutUser()
        localStorage.removeItem('token')
        // this.props.history.push("/login")
        // when clicked, clear the user from the store
        // clear the localStorage (remove token)
        // send back to login path

    }


    render(){
        console.log(this.props)
        console.log(localStorage)
        const token = localStorage.getItem('token');
        return(
            <Styles>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">myToDos</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/todos">To-Dos</Nav.Link>
                    {
                        this.state.token ? 
                        this.renderLogOut()
                        :
                        this.renderLogIn()
                }
                    </Nav>
                </Navbar>
            </Styles>
        )
    }
};

const mapStateToProps = state => {
    return {
        user: state.auth
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({type: "LOGOUT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);