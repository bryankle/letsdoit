import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import taskReducer from './task_reducer';
import authReducer from './auth_reducer';
import loadingReducer from './loading_reducer';
import sidebarReducer from './sidebar_reducer';

const rootReducer = combineReducers({ 
	tasks: taskReducer,
	auth: authReducer,
	loading: loadingReducer, 
	sidebar: sidebarReducer,
	form
})

export default rootReducer;