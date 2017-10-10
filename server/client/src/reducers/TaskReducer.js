import {
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS
} from '../actions/types';

const INITIAL_STATE = {
	user: '',
	tasks: {}
}

export default(state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOAD_TASKS:
			return { ...state, tasks: action.payload } // Loads users tasks into state
			// return { ...state, tasks: [...state.tasks, action.payload] }
	}
}