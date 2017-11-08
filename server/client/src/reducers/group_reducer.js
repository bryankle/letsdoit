import axios from 'axios'
import {
  LOAD_GROUPS,
  ADD_GROUP,
  DELETE_GROUP,
  EDIT_GROUP
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		
		case LOAD_GROUPS:
			return action.payload
		default:
			return state;
	}
}