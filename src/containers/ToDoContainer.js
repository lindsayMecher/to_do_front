import React from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../components/ToDoInput';
import ToDos from '../components/ToDos';
import { Container, Row } from 'react-bootstrap';


class ToDoContainer extends React.Component{

    render(){
        console.log(this.props.todos)
        return(
            <Container>
                
                    <h3>My To-Dos</h3>
                
                
                    <ToDoInput />
                    <ToDos todos={this.props.todos}/>
                
            </Container>
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps, null)(ToDoContainer);