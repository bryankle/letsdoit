import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import taskReducer from './task_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({ 
	tasks: taskReducer,
	auth: authReducer,
	form
})

export default rootReducer;