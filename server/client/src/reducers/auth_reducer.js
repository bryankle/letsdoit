import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case AUTH_USER:
			console.log("AUTH USER")
			return {...state, error: '', authenticated: true};
		case UNAUTH_USER:
			console.log("UNAUTH_USER")
			return {...state, error: '', authenticated: false};
		case AUTH_ERROR:
			console.log("AUTH_ERROR")
			return {...state, error: action.payload }
		default:
			return state;
	}
}