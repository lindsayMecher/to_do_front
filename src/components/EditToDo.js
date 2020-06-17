import React from 'react';
import { Row, Col, Card, Button, Modal, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
const TODOS = "http://localhost:3000/to_dos";

class EditToDo extends React.Component {

    constructor(){
        super()
        this.state = {
            id: '',
            title: '',
            body: '',
            importance: 'low'
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.todo.id,
            title: this.props.todo.title,
            body: this.props.todo.body,
            importance: this.props.todo.importance 
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log('submitting')
        const reqObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(`${TODOS}/${this.props.todo.id}`, reqObj)
            .then(resp => resp.json())
            .then(toDoData => {
                this.props.updateToDoObj(toDoData)
                this.props.toggleModal()
                // update the redux store with the incoming data.
            })
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.props)
        console.log(this.state)
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Edit ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={(event) => this.handleOnSubmit(event)} >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Title:
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
                        Body: 
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
                        <Form.Group as={Row} value={this.state.importance} >
                        <Form.Label as="legend" column sm={2}>
                            Importance:
                        <br/>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Low"
                            name="importance"
                            value="low"
                            checked={this.state.importance === "low"}
                            onChange={this.handleOnChange}
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Medium"
                            name="importance"
                            value="medium"
                            checked={this.state.importance === "medium"}
                            onChange={this.handleOnChange}
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="High"
                            name="importance"
                            value="high"
                            checked={this.state.importance === "high"}
                            onChange={this.handleOnChange}
                            id="formHorizontalRadios3"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row}>
                        <Col>
                            <Button type="submit">Update</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.props.toggleModal} >Cancel</Button>
                        </Col>
                    </Form.Group>
                    </Form>
                </Modal.Body>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateToDoObj: toDoObj => dispatch({type: "UPDATE_TODO_OBJ", payload: toDoObj})
    }
}

export default connect(null, mapDispatchToProps)(EditToDo);

    //   <Modal
    //           show={show}
    //           onHide={handleClose}
    //           backdrop="static"
    //           keyboard={false}
    //         ></Modal>