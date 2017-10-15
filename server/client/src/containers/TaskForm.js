import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

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
        this.setState({ inputValue: '' })
    }

    handleInput(event) {
    	this.setState({ inputValue: event.target.value })
    }

	render() {
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

export default TaskForm;