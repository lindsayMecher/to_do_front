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
                return "light";
            case "medium":
                return "secondary";
            case "high":
                return "important";
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
                
                    <Card className="to-do-card">

                            <h2>
                                {this.props.todo.title}
                            </h2>

                        <Card.Body>
                            <h3>
                                {this.props.todo.body}
                            </h3>
                        </Card.Body>
                        
                            <Row>
                                <Col>
                                    <button onClick={(event) => this.toggleModal(event)} >Edit</button>
                                </Col>
                                <Col>
                                    <button onClick={(toDoId) => this.handleDelete(this.props.todo.id)} >Delete</button>
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
                       
                    </Card>
                
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