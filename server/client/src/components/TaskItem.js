import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

const TaskItem = ({ completed, handleClick, task }) => {
  if (completed) {
    return <Checkbox onClick={handleClick} label={task} defaultChecked />;
  } else {
    return <Checkbox onClick={handleClick} label={task} />;
  }
};

export default TaskItem;
