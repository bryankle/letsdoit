import axios from 'axios';
import {
	ADD_GROUP
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
