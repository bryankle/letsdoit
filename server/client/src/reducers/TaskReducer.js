import {
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS
} from '../actions/types';

export default(state = {}, action) => {
	switch(action.type) {
		case LOAD_TASKS:
			console.log("HELLO")
			console.log(action)
			return action.payload // Loads users tasks into state
			// return { ...state, tasks: [...state.tasks, action.payload] }
		default:
			console.log("Default reducer");
			return state
	}
}


