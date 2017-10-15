import {
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS

} from '../actions/types';

export default(state = {}, action) => {
	switch(action.type) {
		case LOAD_TASKS:
			console.log(action)
			return action.payload // Loads users tasks into state
		case ADD_TASK:
			console.log("ADD_TASK");
			// return {...state, tasks.concat(action.payload) }
		default:
			console.log("Default reducer");
			return state
	}
}


