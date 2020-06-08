import React from 'react';
import { ToDo } from './ToDo';
import { Container, Row } from 'react-bootstrap';

class ToDos extends React.Component{

    renderToDos = () => {
        return this.props.todos.map(todo => {
            return(
                <ToDo todo={todo} />
            )
        })
    }
    render(){
        console.log(this.props.todos)
        return(
            <Container>
                    {this.renderToDos()}
            </Container>
        )
    }
};

export default ToDos;