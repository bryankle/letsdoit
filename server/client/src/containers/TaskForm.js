import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

/*
    REMOVE REDUX FROM COMPONENT LATER
    PASS IN ADDTASK AS PROPS
*/

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit() {
    console.log("Submitted!");
    console.log('ID', this.props.id)
    this.props.addTask(this.props.id, this.state.inputValue);
    this.setState({ inputValue: "" });
    console.log("this.state.inputValue", this.state.inputValue);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          style={{ width: "100%" }}
          size="massive"
          placeholder="Let's do something"
        />
        <h1>
          {this.state.inputValue ? `Let's ${this.state.inputValue}!` : ""}
        </h1>
      </Form>
    );
  }
}

export default TaskForm;
