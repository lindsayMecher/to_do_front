export default function todos(state = {
    todos: [],
    loading: true
}, action){
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
        default:
            return state;
    }
}