import axios from 'axios';
import {
	GROUP_LOAD_TASKS,
	GROUP_ADD_TASK,
	GROUP_DELETE_TASK,
	GROUP_COMPLETE_TASK
} from './types';

// ('/api/group/:groupId/tasks'
export function groupLoadTasks(groupId) {
	return function(dispatch) {
		console.log('ACTION - groupLoadTasks')
		axios.get(`/api/group/${groupId}/tasks`)
			.then(res => {
				dispatch({
					type: GROUP_LOAD_TASKS,
					payload: res.data
				})
			})
	}
}