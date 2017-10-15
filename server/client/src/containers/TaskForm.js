import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class TaskForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: ''
		}
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
            </Form>
		)
	}
}

export default TaskForm;