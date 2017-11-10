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
            touch: false   
            }
    }

    handleInput = function(e) {
        this.setState({ input: e.target.value })
    }

    componentWillMount() {
        setTimeout(() => {
            this.props.loadingComplete();
        }, 1000)
    }

    render() {

        const { userTasks, completeTask, groupTasks } = this.props;

        if (!this.props.loading.status) {
            let tasks = groupTasks ? groupTasks : userTasks; // If group tasks were passed in as props, render instead of user tasks
            console.log('this.props', this.props)
            const completedTaskCount = tasks.filter(task => task.completed).length;
            const totalTaskCount = tasks.length
            const percent = (completedTaskCount / totalTaskCount) * 100;

            return(
                <div>
                    <Header/>

                    <Grid centered columns={2}>
                        <Grid.Column>
                        {/* Move form to separate container? at later time */}
                        <TaskForm />
                        
                        <ProgressBar percent={percent}/>
                        <Tasks tasks={tasks} completeTask={completeTask}/>
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

export default(Todo);