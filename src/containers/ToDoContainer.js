import React from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../components/ToDoInput';
import ToDos from '../components/ToDos';
import { Container, Row } from 'react-bootstrap';
const USER = 'http://localhost:3000/current_user';


class ToDoContainer extends React.Component{

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(!token){
            this.props.history.push('/login')
        } else {

            // send request to backend to verify correct token
            // retrieve the logged in user and save to store
            const reqObj = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            fetch(USER, reqObj)
                .then(resp => resp.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
        }
    }

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