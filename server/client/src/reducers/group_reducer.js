import axios from 'axios'
import {
  LOAD_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  EDIT_GROUP
} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case LOAD_GROUPS:
			return action.payload
		case ADD_GROUP:
			return [...state, action.payload]
		case DELETE_GROUP:
			return [...state].filter(group => group !== action.payload)
		default:
			return state;
	}
}