import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import TaskReducer from './TaskReducer';

const rootReducer = combineReducers({ 
	tasks: TaskReducer,
	form
})

export default rootReducer;