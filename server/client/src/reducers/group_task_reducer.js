import axios from 'axios';
import {
	GROUP_LOAD_TASKS,
	GROUP_ADD_TASK,
	GROUP_DELETE_TASK,
	GROUP_COMPLETE_TASK
} from '../actions/types';

export default function(state={}, action) {
	switch(action.type) {
		case GROUP_LOAD_TASKS:
			console.log('REDUCER - GROUP_LOAD_TASKS')
			console.log('action.payload', action.payload)
			return action.payload;
		case GROUP_ADD_TASK:
			console.log('REDUCER - GROUP_ADD_TASK')
			console.log('action.payload', action.payload)
			console.log('state', state);
			return {...state, tasks: [...state.tasks, action.payload]}
		case GROUP_COMPLETE_TASK:
			console.log('REDUCER - GROUP_COMPLETE_TASK');
			console.log('action.payload', action.payload);
			console.log('state', state);
			const { groupId, taskId } = action.payload;

			let completedTask = state.tasks.find(task => task.id === parseInt(taskId))
			completedTask.completed = true;
			return {...state, tasks: [...state.tasks]}
		default:
			return state;
	}
}


// case COMPLETE_TASK:
// 			console.log("REDUCERS - COMPLETE_TASK")
// 			console.log('action.payload', action.payload)
// 			const { userId, taskId } = action.payload;
// 			console.log('state', state)
// 			var completedTask = state.find((task) => {
// 				console.log(task.id, 'and', taskId)
// 				return task.id === parseInt(taskId);
// 			})
// 			completedTask.completed = true;
// 			console.log('completedTask', completedTask);
// 			return [...state]