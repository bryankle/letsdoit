import axios from 'axios';
import {
	GROUP_LOAD_TASKS,
	GROUP_ADD_TASK,
	GROUP_DELETE_TASK,
	GROUP_COMPLETE_TASK
} from '../actions/types';

export default function(state={}, action) {
	switch(action.type) {
		case GROUP_LOAD_TASKS:
			console.log('REDUCER - GROUP_LOAD_TASKS')
			console.log('action.payload', action.payload)
			return action.payload;
		case GROUP_ADD_TASK:
			return {...state, tasks: [...state.tasks, action.payload]}
		default:
			return state;
	}
}