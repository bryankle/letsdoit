import axios from 'axios';
import {
	ADD_TASK,
	DELETE_TASK,
	LOAD_TASKS,
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE
} from './types';
const ROOT_URL = 'http://localhost:3001';

export function loadTasks() {
	return function(dispatch) {
		axios.get('/api')
      .then(res => {
        console.log('res', res)
        dispatch({ type: LOAD_TASKS, payload: res.data })
      })
	}
}

export const addTask = (task) => {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/task`, { content: task })
			.then(response => {
				console.log('Task is being added...');
				dispatch({ type: ADD_TASK, payload: task })
			})
	}
}


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

// Change to fetchTasks later
export function fetchMessage() {
	return function(dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then(response => {
				dispatch({
					type: FETCH_MESSAGE,
					payload: response.data.message
				})
			})
	}
}

