import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TaskForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: ''
		}

		this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = function(event) {
        console.log('Handling submission...');
        event.preventDefault()
        this.props.addTask(this.state.inputValue)
        this.setState({ inputValue: '' });
    }

    handleInput(event) {
    	this.setState({ inputValue: event.target.value })
    }

	render() {
        console.log("TASK FORM actions", this.props);
		return(
			<Form 
            onSubmit={this.handleSubmit}>
                <Input 
                    value={this.state.inputValue}
                    onChange={this.handleInput} 
                    onSubmit={this.handleSubmit}
                    placeholder="Let's do something" />
                <h1>{this.state.inputValue ? `Let's ${this.state.inputValue}!` : ''}</h1>
            </Form>
		)
	}
}

export default connect(null, actions)(TaskForm)