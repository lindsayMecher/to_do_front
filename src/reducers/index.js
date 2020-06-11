import counter from './counter';
import todos from './todos';
import { auth } from './auth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    todos,
    auth
})

export default rootReducer;