import React from 'react';
import { Row, Col, Card, Button, Modal, Form, FormControl } from 'react-bootstrap';

class EditToDo extends React.Component {

    constructor(){
        super()
        this.state = {
            title: '',
            body: '',
            importance: 'Low'
        }
    }

    componentDidMount(){
        this.setState({
            title: this.props.todo.title,
            body: this.props.todo.body,
            importance: this.props.todo.importance 
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = () => {

    }
    render(){
        console.log(this.props)
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Edit ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <Form.Group as={Row} value={this.state.importance} >
                        <Form.Label as="legend" column sm={2}>
                            Importance
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Low"
                            name="importance"
                            value="Low"
                            checked={this.state.importance === "Low"}
                            onChange={this.handleOnChange}
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Medium"
                            name="importance"
                            value="Medium"
                            checked={this.state.importance === "Medium"}
                            onChange={this.handleOnChange}
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="High"
                            name="importance"
                            value="High"
                            checked={this.state.importance === "High"}
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                    Update
                    </Button>
                    <Button variant="primary">Cancel</Button>
                </Modal.Footer>
            </>
        );
    }
}

export default EditToDo;

    //   <Modal
    //           show={show}
    //           onHide={handleClose}
    //           backdrop="static"
    //           keyboard={false}
    //         ></Modal>