import axios from 'axios';
import {
	GROUP_LOAD_TASKS,
	GROUP_ADD_TASK,
	GROUP_DELETE_TASK,
	GROUP_COMPLETE_TASK
} from './types';

// ('/api/group/:groupId/tasks'
export const groupLoadTasks = (groupId) => {
	return function(dispatch) {
		console.log('ACTION - groupLoadTasks')
		axios.get(`/api/group/${groupId}/task`)
			.then(res => {
				dispatch({
					type: GROUP_LOAD_TASKS,
					payload: res.data
				})
			})
	}
}
// 	app.post('/api/group/:groupId/tasks', GroupTaskController.addTask);

export const groupAddTask = (groupId, task) => {
	return function(dispatch) {
		console.log("ACTION - groupAddTask");
		console.log('groupId', groupId)
		console.log('Task is being added...');
		console.log("Adding task", task);
			axios.post(`/api/group/${groupId}/task`, { task })
			.then(res => {
				dispatch({
					type: GROUP_ADD_TASK,
					payload: res.data
				})
			})
	}
}



export const groupCompleteTask = (groupId, taskId) => {
	console.log('ACTIONS - groupCompleteTask')
	console.log('groupId', groupId)
	return function(dispatch) {
		axios.put(`/api/group/${groupId}/task/${taskId}`)
			.then(res => {
				dispatch({
					type: GROUP_COMPLETE_TASK,
					payload: res.data

				})
			})
	}
}



// export const completeTask = (userId, taskId) => {
// 	console.log("ACTIONS - completeTask")
// 	return function(dispatch) {
// 		axios.put(`${ROOT_URL}/api/user/${userId}/tasks/${taskId}`)
// 			.then(res => {
// 				console.log('ACTIONS - DISPATCHING COMPLETE_TASK')
// 				dispatch({
// 					type: COMPLETE_TASK,
// 					payload: res.data
// 				})
// 			})
// 	}
// }