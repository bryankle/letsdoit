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
		const { groupId } = this.props.match.params;
		console.log('componentDidMount')
		console.log('groupId', groupId)
		this.props.groupLoadTasks(groupId); // Do not remove; change ID associated later to reflect groupId
		// axios.post(`/api/group/1/tasks`, { task: 'testing' })
		// this.props.groupAddTask(1, 'hello testing')
	}

	render() {
		console.log('GroupPage')
		console.log('this.props', this.props)
		if (this.props.match.params.groupId) {
			return (
				<TodoContainer
					tasks={this.props.groupTasks}
					// completeTask={} 
					loading={this.props.loading}
					loadingComplete={this.props.loadingComplete}
				/>)
		}

		else return(
			<div>
				hello
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		groupTasks: state.groupTasks.tasks, // Refactor later,
		loading: state.loading
	}
}

export default connect(mapStateToProps, actions)(GroupPage);