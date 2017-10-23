import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

const TaskItem = (props) => (
    <Checkbox 
    	onClick={props.handleClick}
    	label={props.task} />
  )

export default TaskItem;