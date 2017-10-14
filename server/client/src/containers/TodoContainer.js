import React, { Component } from 'react';
import { Grid, Input, Form } from 'semantic-ui-react';
import ProgressBar from '../components/ProgressBar';
import Tasks from './Tasks';
import Header from '../components/Header';
import Loading from '../components/Loading';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            loading: true
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = function(e) {
        this.setState({ input: e.target.value })
    }

    handleSubmit = function() {
        console.log('Handling submission...');
        this.setState({ input: '' })
    }
    // Replace in Redux
    _addTask = function() {
        let task = this.state.input;
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: !this.state.loading })
        }, 1000)
    }

    render() {
        console.log('this.props')
        console.log(this.props)
        if (!this.state.loading) {
            return(
                <div>
                <Header />
                <Grid centered columns={2}>
                
                    <Grid.Column>
                {/* Move form to separate container? at later time */}
                    <Form 
                    onSubmit={this.handleSubmit}>
                        <Input 
                            value={this.state.input}
                            onChange={this.handleInput} 
                            onSubmit={this.handleSubmit}
                            placeholder="Let's do something" />
                    </Form>
                    
                    <ProgressBar />
                    <Tasks />
                    </Grid.Column>
                </Grid>
                </div>
            )
        }
        else {
            return (
                <Loading />
            ) 
        }
    }
}

export default Todo;