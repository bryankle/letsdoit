import axios from 'axios';
import {
	ADD_TASK,
	DELETE_TASK,
	COMPLETE_TASK,
	LOAD_TASKS,
	CLEAR_COMPLETED
} from './types';

const ROOT_URL = 'http://localhost:3001';

// Find userId and pass into tasks 
export const loadTasks = user => {
	console.log('loadTasks');
	console.log(user);
	return function(dispatch) {
		axios.get(`${ROOT_URL}/api/tasks/${user}`)
      	.then(res => {
	        console.log('res', res)
	        dispatch({ type: LOAD_TASKS, payload: res.data })
	      })
	}
}

export const addTask = (userId, task) => {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/api/tasks/${userId}`, { task })
			.then(res => {
				console.log('Task is being added...');
				console.log("Adding task", task);
				console.log('User ID is ', userId)
				dispatch({ 
					type: ADD_TASK, 
					payload: res.data 
				})
			})
	}
}


export const completeTask = (userId, taskId) => {
	console.log("ACTIONS - completeTask")
	return function(dispatch) {
		axios.put(`${ROOT_URL}/api/user/${userId}/tasks/${taskId}`)
			.then(res => {
				console.log('ACTIONS - DISPATCHING COMPLETE_TASK')
				dispatch({
					type: COMPLETE_TASK,
					payload: res.data
				})
			})
	}
}

export const clearCompletedTasks = (user) => {
	console.log('ACTION - clearCompletedTasks')
	axios.delete(`${ROOT_URL}/api/tasks/${user}`)
	return {
		type: CLEAR_COMPLETED
	}
}
