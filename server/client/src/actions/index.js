import axios from 'axios';
import {
	ADD_TASK,
	DELETE_TASK,
	LOAD_TASKS,
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
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
		// Submit username/password to the server
		axios.post(`${ROOT_URL}/signin`, { name, password })
			.then(response => {
				// If the request is good
				// - Update state to indicate user is authenticated
				console.log("User has successfully signed in")
				dispatch({ type: AUTH_USER })
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				// - redirect tot he route '/feature' --> '/tasks'
				redirect()
			})
			// If request is bad
			.catch(() => {
				// - Show an error to the user
				dispatch(authError('Bad Login Info'))
			})
	}
}

export function signupUser({ name, password }, redirect) {
	return function(dispatch) {
		// Submit username/password to the server
		axios.post(`${ROOT_URL}/signup`, { name, password })
			.then(response => {
				console.log("User has successfully signed up")
				dispatch({ type: AUTH_USER })
				localStorage.setItem('token', response.data.token);
				redirect()
			})
			// If request is bad
			.catch( error => dispatch(authError( error.response.data.error)));
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER }
}