export const auth = (state = null, action) => {
    switch(action.type){
        case "LOGIN":
            return  state;
        case "LOGOUT":
            return state;
        default:
            return state;
    }
};