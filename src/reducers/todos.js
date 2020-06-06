export default function todos(state = {
    todos: [],
    loading: true
}, action){
    switch(action.type){
        case "LOADING_TODOS":
            console.log("loading")
            debugger
            return state;
        case 'ADD_TODOS':
            console.log("adding todo")
            debugger
            return state;
            // return state.concat([action.payload]);
        default:
            return state;
    }
}