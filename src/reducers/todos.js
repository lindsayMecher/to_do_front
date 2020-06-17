export default function todos(state = {
    todos: [],
    loading: true
}, action){
    let todo;
    let idx;
    let newToDos;
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
                todos: [todo, ...state.todos]
            };
        case "UPDATE_TODOS":
            return {
                ...state,
                todos: action.payload
            };
        case "UPDATE_TODO_OBJ":
            
            idx = state.todos.findIndex(todo => todo.id === action.payload.id)
            newToDos = [
                ...state.todos.slice(0, idx),
                action.payload,
                ...state.todos.slice(idx + 1)
            ]
            return {
                ...state,
                todos: newToDos
            };
        case "DELETE_TODO":
            idx = state.todos.findIndex(todo => todo.id === action.payload)
            newToDos = [
                ...state.todos.slice(0, idx),
                ...state.todos.slice(idx + 1)
            ]
            return {
                ...state,
                todos: newToDos
            };
        default:
            return state;
    }
}