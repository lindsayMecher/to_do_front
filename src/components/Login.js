import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
const AUTH = 'http://localhost:3000/auth';


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // send a fetch request to the auth controller
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(AUTH, reqObj)
            .then(resp => resp.json())
            .then(userData => {
                if(userData.error){
                    alert(userData.error)
                } else {
                    console.log(userData)
                    localStorage.setItem('token', userData.token)
                    this.props.loginUser(userData)
                    this.props.history.push('/todos')
                }
            })
            
        // back end is in charge of authentication
        // send request to backend to verify if the user exists and the password matches
        // save the user that comes back into the redux store.
        // if the user doesnt match, send back an error.
        //make an alert and say invalid credentials.

        // submit the info to the backend to verify user. Then give user token to hold on to session.
        console.log(this.state)
        // then reset the state
        // then push the user through to the todos page.
    }

    render(){
        return(
            <React.Fragment>
                <Form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleOnChange} value={this.state.email} name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleOnChange} value={this.state.password} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="login" >
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userObj) => dispatch({type: "LOGIN", payload: userObj})
    }
};

export default connect(null, mapDispatchToProps)(Login);