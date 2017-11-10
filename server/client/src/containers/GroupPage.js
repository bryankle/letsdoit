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
		
		this.props.groupLoadTasks(1); // Do not remove; change ID associated later to reflect groupId
		// axios.post(`/api/group/1/tasks`, { task: 'testing' })
		this.props.groupAddTask(1, 'hello testing')
	}
	
	render() {
		console.log('GroupPage')
		console.log('this.props', this.props)
		if (this.props.match.params.groupId) {
			return <TodoContainer groupTasks={this.props.groupTasks}/>
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