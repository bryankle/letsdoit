import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
// import { reset, reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

class TaskForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: ''
		}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    handleSubmit() {
        this.setState({ inputValue: '' })
    }
  
	render() {

        const { handleSubmit } = this.props;

        console.log("TASK FORM actions", this.props);
		return(
			<Form 
                onSubmit={}>
                <Input 
                onChange={() => }
                style={{width: '100%'}}
                size='massive'
                placeholder="Let's do something"
            />
                <h1>{this.state.inputValue ? `Let's ${this.state.inputValue}!` : ''}</h1> 
            </Form>
		)
	}
}



// function mapStateToProps(state) {
//   return { 
//     errorMessage: state.tasks.error,
//     tasks: state.tasks,
//     user: state.auth.user
//     }
// }

// const afterSubmit = (result, dispatch) => {
//     dispatch(reset('taskform'));
// }

export default TaskForm;