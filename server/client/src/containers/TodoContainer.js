import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProgressBar from '../components/ProgressBar';
import Tasks from './Tasks';
import Header from '../components/Header';
import Loading from '../components/Loading';
import TaskForm from './TaskForm';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            loading: true
        }
    }

    handleInput = function(e) {
        this.setState({ input: e.target.value })
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
                        <TaskForm />
                        
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