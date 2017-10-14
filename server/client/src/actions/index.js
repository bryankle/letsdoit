import axios from 'axios';
import {
	ADD_TASK,
	DELETE_TASK,
	LOAD_TASKS
} from './types';

export const loadTasks = (tasks) => {
	return {
		type: LOAD_TASKS,
		payload: tasks
	}
}

export const addTask = (task) => {
	return {
		type: ADD_TASK,
		payload: task
	}
}

const ROOT_URL = 'http://localhost:3001';

export function signinUser({ name, password }) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, { name, password })

	// Submit username/password to the server

	// If the request is good
	// - Update state to indicate user is authenticated
	// - Save the JWT token
	// - redirect tot he route '/feature' --> '/tasks'

	// If request is bad
	// - Show an error to the user

	}
}