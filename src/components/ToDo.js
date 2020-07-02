import React from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import EditToDo from './EditToDo';
import { connect } from 'react-redux';
const TODOS = "http://localhost:3000/to_dos";

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

    handleDelete = (id) => {
        fetch(`${TODOS}/${this.props.todo.id}`, {method: "DELETE"})
            .then(resp => resp.json())
            .then(data => {
                console.log(data.message)
                this.props.deleteToDo(this.props.todo.id)
            })
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <Col>
                    <Card border={this.color()} className="high-priority">
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
                                    <Button onClick={(event) => this.toggleModal(event)} >Edit</Button>
                                </Col>
                                <Col>
                                    <Button onClick={(toDoId) => this.handleDelete(this.props.todo.id)} >Delete</Button>
                                </Col>
                            </Row>
                            <Modal
                                show={this.state.showModal}
                                onHide={this.toggleModal}
                                backdrop="static"
                                keyboard={false}
                            >
                            <EditToDo todo={this.props.todo} toggleModal={this.toggleModal}/>
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

const mapDispatchToProps = dispatch => {
    return {
        deleteToDo: (toDoId) => dispatch({type: "DELETE_TODO", payload: toDoId})
    }
}

export default connect(null, mapDispatchToProps)(ToDo);