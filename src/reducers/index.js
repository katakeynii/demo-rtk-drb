import { combineReducers } from 'redux';
import { todosReducer } from './todo.reducer'
import { usersReducer } from './user.reducer'

export default combineReducers({
    todosReducer,
    usersReducer
});

