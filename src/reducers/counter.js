export default function counter(state = 0, action){
    switch(action.type){
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}

// typescript - type checker. makes sure not undefined.
// tester. include into JS files.