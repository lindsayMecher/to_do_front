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
                .then(userData => {
                    console.log(userData)
                    if(userData.error) {
                        this.props.history.push('/login')
                    } else {
                        this.props.loginUser(userData)
                        this.props.updateToDos(userData.to_dos)
                    }
                })
                .catch(err => console.log(err))
        }
    }

    render(){
        console.log(this.props)
        return(
            <Container>
                
                    <h3>My To-Dos</h3>
                
                
                    <ToDoInput user={this.props.user} />
                    <ToDos todos={this.props.todos}/>
                
            </Container>
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        user: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: userObj => dispatch({type: "LOGIN", payload: userObj}),
        updateToDos: toDos => dispatch({type: "UPDATE_TODOS", payload: toDos})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);