import axios from 'axios';
import {
	ADD_GROUP,
	LOAD_GROUPS,
	ADD_TO_GROUP
} from './types';

const ROOT_URL = 'http://localhost:3001';

export function addGroup(groupName, userName) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/api/groups`, { name: groupName, creator: userName })
		.then((res) => {
			console.log('ACTION - ADD_GROUP')
			console.log(res);
			dispatch({
				type: ADD_GROUP,
				payload: res.data
			})
		})
	}
}
// 	app.get('/api/groups/:userId');

export function loadGroup(userId) {
	console.log('ACTION	- loadGroup')
	return function(dispatch) {
		axios.get(`/api/groups/`)
			.then((res) => {
				console.log('ACTION - LOAD_GROUPS')
				console.log('res', res)
				dispatch({
					type: LOAD_GROUPS,
					payload: res.data
				})
			})
	}
}

export function addToGroup(userId, groupId) {
	return function(dispatch) { // How to handle groups with the same name? - groupId
		axios.post(`/api/group/${groupId}/add/user/${userId}`) // Change later
			.then(res => {
				console.log('ACTION - addGroup');
				dispatch({
					type: ADD_GROUP,
					payload: res.data
				})
			})
	}
}