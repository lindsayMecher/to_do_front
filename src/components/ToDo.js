import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export const ToDo = ({todo}) => {
    console.log(todo)
    return(
        <Row>
            <Card>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.body}</Card.Text>
                    <p>{todo.importance}</p>
                </Card.Body>
            </Card>
        </Row>
    )
};