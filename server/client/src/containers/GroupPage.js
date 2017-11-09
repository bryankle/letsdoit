import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoContainer from './TodoContainer';
import axios from 'axios';

class GroupPage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// axios.get('/api/group/1/tasks')
		// 	.then(data => console.log('data', data))
		this.props.groupLoadTasks(1);
	}

	render() {
		console.log('GroupPage')
		console.log('this.props', this.props)
		if (this.props.match.params.groupId) {
			return <TodoContainer group={true}/>
		}

		// else return(
		// 	<div>
		// 		<TodoContainer />
		// 	</div>
		// )
	}

}

function mapStateToProps(state) {
	return {
		groupTasks: state.groupTasks.tasks // Refactor later
	}
}

export default connect(mapStateToProps, actions)(GroupPage);