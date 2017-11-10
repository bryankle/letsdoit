import React, { Component } from 'react';
import TodoContainer from './TodoContainer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserPage extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<TodoContainer {...this.props}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		userTasks: state.tasks,
		loading: state.loading
	}
}

export default connect(mapStateToProps, actions)(UserPage);