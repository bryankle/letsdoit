import axios from 'axios';
import {
	ADD_TASK,
	DELETE_TASK,
	COMPLETE_TASK,
	LOAD_TASKS,
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE,
	LOADING,
	NOT_LOADING,
	SHOW_SIDEBAR,
	HIDE_SIDEBAR,
	CLEAR_COMPLETED,
	ADD_GROUP
} from './types';
const ROOT_URL = 'http://localhost:3001';

// Find userId and pass into tasks 
export function loadTasks(user) {
	console.log('loadTasks');
	console.log(user);
	return function(dispatch) {
		axios.get(`${ROOT_URL}/api/tasks/${user}`)
      	.then(res => {
	        console.log('res', res)
	        dispatch({ type: LOAD_TASKS, payload: res.data })
	      })
	}
}

export const addTask = (user, task) => {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/api/tasks/${user}`, { 
				task: task
				}
			)
			.then(res => {
				console.log('Task is being added...');
				console.log("Adding task", task);
				console.log("User", user)
				dispatch({ type: ADD_TASK, payload: res.data })
			})
	}
}

export const completeTask = (userId, taskId) => {
	console.log("ACTIONS - completeTask")
	return function(dispatch) {
		axios.put(`${ROOT_URL}/api/user/${userId}/tasks/${taskId}`)
			.then(res => {
				console.log('ACTIONS - DISPATCHING COMPLETE_TASK')
				dispatch({
					type: COMPLETE_TASK,
					payload: res.data
				})
			})
	}
}

export function loadingBegin() {
	return {
		type: LOADING
	}
}

export function loadingComplete() {
	return {
		type: NOT_LOADING
	}
}


export function signinUser({ name, password }, redirect) {
	return function(dispatch) {
		// Submit username/password to the server
		axios.post(`${ROOT_URL}/signin`, { name, password })
			.then(response => {
				// If the request is good
				// - Update state to indicate user is authenticated
				console.log("User has successfully signed in");
				console.log("response", response)
				dispatch({ 
					type: AUTH_USER,
					payload: name
					});
				// - Save the JWT tokenloca
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user', name);
				// - redirect tot he route '/feature' --> '/tasks'
				// loadTasks(name).then(() =>)

				redirect()
			})
			// If request is bad
			.catch(err => {
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
				localStorage.setItem('user', name);
				redirect()
			})
			// If request is bad
			.catch( error => dispatch(authError(error.response.data.error)));
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

export function showSidebar () {
	return {
		type: SHOW_SIDEBAR
	}
}

export function hideSidebar () {
	return {
		type: HIDE_SIDEBAR
	}
}

export function clearCompletedTasks (user) {
	console.log('ACTION - clearCompletedTasks')
	axios.delete(`${ROOT_URL}/api/tasks/${user}`)
	return {
		type: CLEAR_COMPLETED
	}
}

export function addGroup(groupName, userName) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/api/groups`, { name: groupName, creator: userName })
		.then((res) => {
			console.log('ACTION - ADD_GROUP')
			console.log(res);
			dispatch({
				type: ADD_GROUP,
				payload: ''
			})
		})
	}
}
