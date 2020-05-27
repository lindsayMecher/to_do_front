export default function todos(state = ['hey', 'all'], action){
    switch(action.type){
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}