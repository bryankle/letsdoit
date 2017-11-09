import axios from 'axios';
import {
	GROUP_LOAD_TASKS,
	GROUP_ADD_TASK,
	GROUP_DELETE_TASK,
	GROUP_COMPLETE_TASK
} from '../actions/types';

export default function(state=[], action) {
	switch(action.type) {
		case GROUP_LOAD_TASKS:
			return action.payload;
		default:
			return state;
	}
}