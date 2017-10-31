import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3001';

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
