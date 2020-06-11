export const auth = (state = null, action) => {
    switch(action.type){
        case "LOGIN":
            console.log(action.payload)
            return action.payload;
        case "LOGOUT":
            return null;
        default:
            return state;
    }
};