import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case AUTH_USER:
			console.log("AUTH USER")
			console.log(action.payload)
			return {...state, 
					error: '', 
					authenticated: true,
					user: action.payload };
		case UNAUTH_USER:
			console.log("UNAUTH_USER")
			return {...state, error: '', authenticated: false};
		case AUTH_ERROR:
			console.log("AUTH_ERROR")
			return {...state, error: action.payload }
		case FETCH_MESSAGE:
			return { ...state, message: action.payload }
		default:
			return state;
	}
}