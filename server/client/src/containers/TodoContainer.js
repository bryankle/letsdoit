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
            loading: true,
            touch: false
        }
    }

    handleInput = function(e) {
        this.setState({ input: e.target.value })
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)
    }

    render() {
        console.log('this.state')
        console.log(this.state)
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