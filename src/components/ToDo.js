import React from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import EditToDo from './EditToDo';

class ToDo extends React.Component {
    constructor(){
        super()
        this.state = {
            showModal: false
        }
    }
    color = () => {
        switch(this.props.todo.importance){
            case "low":
                return "primary";
            case "medium":
                return "success";
            case "high":
                return "danger";
            default:
                return "primary";
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        console.log(this.state)
    }

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <Col>
                    <Card border={this.color()} className="text-center">
                        <Card.Header>
                            <Card.Title >
                                {this.props.todo.title}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {this.props.todo.body}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Row>
                                <Col>
                                    <Button onClick={(event) => this.toggleModal(event)} >Edit ToDo</Button>
                                </Col>
                                <Col>
                                    <Button>Delete ToDo</Button>
                                </Col>
                            </Row>
                            <Modal
                                show={this.state.showModal}
                                onHide={this.toggleModal}
                                backdrop="static"
                                keyboard={false}
                            >
                            <EditToDo todo={this.props.todo} />
                            </Modal>
                        </Card.Footer>
                    </Card>
                </Col>
                <br/>
                <br/>
            </React.Fragment>
        )
    }
};

export default ToDo;