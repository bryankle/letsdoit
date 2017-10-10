import {
	ADD_TASK,
	DELETE_TASK,
	LOAD_TASKS
} from './types';

export const loadTasks = (tasks) => {
	return {
		type: LOAD_TASKS,
		payload: tasks
	}
}