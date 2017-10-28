import {
	SHOW_SIDEBAR,
	HIDE_SIDEBAR
} from '../actions/types';

export default function(state={ visibility: false }, action) {
	switch(action.type) {
		case SHOW_SIDEBAR:
			return {...state, visibility: true}
		case HIDE_SIDEBAR:
			return {...state, visibility: false}
		default:
			return state
	}
} 