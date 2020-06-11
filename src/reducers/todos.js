export default function todos(state = {
    todos: [],
    loading: true
}, action){
    let todo;
    switch(action.type){
        case "LOADING_TODOS":
            console.log("loading", state)
            
            const loadingState = {
                todos: [...state.todos],
                loading: true
            }
            return loadingState;
        case 'ADD_TODOS':
            console.log("adding todo")
            
            const updatedState = {
                ...state,
                todos: action.payload,
                loading: false
            }
            return updatedState;
        case "CREATE_TODO":
            todo = action.payload;
            return {
                ...state,
                todos: state.todos.concat(todo)
            };
        case "UPDATE_TODOS":
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}