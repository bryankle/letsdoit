import {
  LOADING,
  NOT_LOADING
} from '../actions/types';

export default function(state = { status: true }, action) {
	switch(action.type) {
		case LOADING:
			return {...state, status: true};
		case NOT_LOADING:
			return {...state, status: false};
		default:
			return state;
	}
}