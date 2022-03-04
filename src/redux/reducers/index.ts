import { combineReducers } from 'redux'

import todoReducer from '../features/todos/todoSlices'
import authReducer from '../features/auth/authSlices'
import registerReducer from '../features/register/registerSlices'



export default combineReducers({
    todos:todoReducer,
    auth:authReducer,
    register:registerReducer
})