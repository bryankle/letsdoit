import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { reset, reduxForm, Field } from 'redux-form';
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
        if (task !== '') {
            this.props.addTask(localStorage.user, task);
            console.log('NEW REDUX STATE');
            console.log(this.props)
        }
    }

    renderInput({ label, input, meta: { touched, error } }) {
        return (
            <span>
            <Input 
                placeholder="Let's do something"
                {...input} />
            </span>
            )
    }

	render() {

        const { handleSubmit } = this.props;

        console.log("TASK FORM actions", this.props);
		return(
			<Form 
                size='massive'
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="task" component={this.renderInput} label="Let's do something!" />
                <h1>{this.state.inputValue ? `Let's ${this.state.inputValue}!` : ''}</h1> 
            </Form>
		)
	}
}



function mapStateToProps(state) {
  return { 
    errorMessage: state.tasks.error,
    tasks: state.tasks,
    user: state.auth.user
    }
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('taskform'));
}

export default reduxForm({
    form: 'taskform', 
    onSubmitSuccess: afterSubmit
})(connect(mapStateToProps, actions)(TaskForm))
