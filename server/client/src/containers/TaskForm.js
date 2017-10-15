import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TaskForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: ''
		}
	}

    handleFormSubmit({ task }) {
        // Prevent empty task from being created
        if (task !== undefined) {
            this.props.addTask(task);
        }
    }

    renderInput({ label, input, meta: { touched, error } }) {
        return (
            <span>
            <Input 
                    placeholder="Let's do something"
                    {...input} />
            {touched && error && <span>{error}</span>}
            </span>
            )
    }

	render() {

        const { handleSubmit } = this.props;

        console.log("TASK FORM actions", this.props);
		return(
			<Form 
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="task" component={this.renderInput} label="Let's do something!" />
                <h1>{this.state.inputValue ? `Let's ${this.state.inputValue}!` : ''}</h1>
            </Form>
		)
	}
}

function validate(formProps) {
  const errors = {};

  if (!formProps.name) {
    errors.name = 'Please enter a username';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.tasks.error }
}

export default reduxForm({form: 'taskform', validate})(connect(mapStateToProps, actions)(TaskForm))
