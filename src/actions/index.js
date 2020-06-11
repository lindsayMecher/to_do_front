const API = "http://localhost:3000/to_dos"

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TODOS"})
        fetch(API)
            .then(resp => resp.json())
            .then(todoData => {
                console.log(todoData)
                dispatch({type: "ADD_TODOS", payload: todoData})
            })
    }
};

// const mapDispatchToProps = state => {
//     return {
//       todos: state.todos.todos,
//       loading: state.loading
//     }
//   }

// import { connect } from 'react-redux';
// import { fetchTodos } from './actions/index';