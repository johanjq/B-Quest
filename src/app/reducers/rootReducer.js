import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer'
import {reducer as FormReducer } from 'redux-form'
import modalReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer.jsx'


const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer, 
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer;