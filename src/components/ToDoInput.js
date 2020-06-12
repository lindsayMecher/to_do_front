import React from 'react';
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
const API = "http://localhost:3000/to_dos"
const USER = 'http://localhost:3000/current_user';

class ToDoInput extends React.Component{



    constructor(){
        super()
        this.state = {
            title: '',
            body: '',
            importance: 'Low'
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
        const stateObj = {
            ...this.state,
            user_id: this.props.user.user.id
        }
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(stateObj)
        };
        fetch(API, reqObj)
            .then(resp => resp.json())
            .then(data => {
                this.props.createToDo(data)
                this.setState({
                    title: '',
                    body: '',
                    importance: ''  
                })
            })
            .catch(err => console.log(err))
        
      }

    render(){
        console.log(this.props)
        return(
            <Form onSubmit={(event) => this.handleOnSubmit(event)} >
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    To-Do Title:
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control
                    type="text"
                    placeholder="Enter Title..."
                    value={this.state.title}
                    name="title"
                    onChange={this.handleOnChange}
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    To-Do: 
                    </Form.Label>
                    <Col sm={10}>
                    <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Enter ToDo Details..."
                    value={this.state.body}
                    name="body"
                    onChange={this.handleOnChange}
                    />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Importance
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="Low"
                        name="importance"
                        value="Low"
                        onChange={this.handleOnChange}
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="Medium"
                        name="importance"
                        value="Medium"
                        onChange={this.handleOnChange}
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="High"
                        name="importance"
                        value="High"
                        onChange={this.handleOnChange}
                        id="formHorizontalRadios3"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Add To-Do</Button>
                    </Col>
                </Form.Group>
                </Form>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createToDo: toDoObj => dispatch({type: "CREATE_TODO", payload: toDoObj})
    }
}

export default connect(null, mapDispatchToProps)(ToDoInput);