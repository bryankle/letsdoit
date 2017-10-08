import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

const TaskItem = (props) => (
    <Checkbox label={props.task} />
  )

export default TaskItem;