import React from 'react';
import { Form, Row, Col, Button, FormControl } from 'react-bootstrap';

class ToDoInput extends React.Component{
    render(){
        return(
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    To-Do Title:
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Enter Title..." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    To-Do: 
                    </Form.Label>
                    <Col sm={10}>
                    <FormControl as="textarea" aria-label="With textarea" />
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
                        label="High"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="Medium"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="Low"
                        name="formHorizontalRadios"
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

export default ToDoInput;