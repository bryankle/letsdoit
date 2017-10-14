import axios from 'axios';
import {
	ADD_TASK,
	DELETE_TASK,
	LOAD_TASKS,
	AUTH_USER
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

export function signinUser({ name, password }, redirect) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, { name, password })
			.then(response => {
				// If the request is good
				// - Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER })
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				// - redirect tot he route '/feature' --> '/tasks'
				redirect()
			})
			.catch()

	// Submit username/password to the server

	

	// If request is bad
	// - Show an error to the user

	}
}