import React, { Component } from "react";
import TodoContainer from "./TodoContainer";
import { connect } from "react-redux";
import * as actions from "../actions";

class UserPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("UserPage");
    console.log("localStorage.userId", localStorage.userId);
    return (
      <TodoContainer
        tasks={this.props.userTasks}
        completeTask={this.props.completeTask}
        loading={this.props.loading}
        loadingComplete={this.props.loadingComplete}
        addTask={this.props.addTask}
        id={parseInt(localStorage.userId)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userTasks: state.tasks,
    loading: state.loading
  };
}

export default connect(mapStateToProps, actions)(UserPage);
