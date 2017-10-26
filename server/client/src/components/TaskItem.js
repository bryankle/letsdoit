import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

const TaskItem = (props) => {
	if (props.completed) {
		return (
			<Checkbox 
	    	onClick={props.handleClick}
	    	label={props.task}
	    	defaultChecked />
		)
	}
	else {
		return (
			<Checkbox 
	    	onClick={props.handleClick}
	    	label={props.task}
	    	/>
		)
	}
  }

export default TaskItem;