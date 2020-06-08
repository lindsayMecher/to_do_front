import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export const ToDo = ({todo}) => {
    console.log(todo)
    return(
        <React.Fragment>
            <Col>
                <Card className="text-center">
                    <Card.Header>
                        <Card.Title>
                            {todo.title}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {todo.body}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{todo.importance}</Card.Footer>
                </Card>
            </Col>
            <br/>
            <br/>
        </React.Fragment>
    )
};