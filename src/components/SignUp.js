import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class SignUp extends React.Component{
    render(){
        return(
            <>
                <h1>Sign Up</h1>
                <Form className="signup-form">
                    <Form.Group>
                       <Form.Label>
                           Username
                       </Form.Label>
                       <Form.Control type="text" />
                    </Form.Group> 
                </Form>
            </>
        )
    }
}

export default SignUp;