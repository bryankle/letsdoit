import {
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS,
  COMPLETE_TASK
} from '../actions/types';

export default(state = {}, action) => {
	switch(action.type) {
		case LOAD_TASKS:
			console.log(action)
			return action.payload // Loads users tasks into state
		case ADD_TASK:
			console.log("ADD_TASK");
			console.log(action.payload)
			console.log('state', state)
			return [...state, action.payload]
		case COMPLETE_TASK:
			console.log("REDUCERS - COMPLETE_TASK")
			return state;
		default:
			console.log("Default reducer");
			return state
	}
}


