import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
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

        if (!this.props.loading.status) {
            console.log('this.props', this.props)
            console.log('this.props.tasks', this.props.tasks)
            const completedTaskCount = this.props.tasks.filter(task => task.completed).length;
            const totalTaskCount = this.props.tasks.length
            const percent = (completedTaskCount / totalTaskCount) * 100;

            return(
                <div>
                    <Header/>

                    <Grid centered columns={2}>
                        <Grid.Column>
                        {/* Move form to separate container? at later time */}
                        <TaskForm />
                        
                        <ProgressBar percent={percent}/>
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

function mapStateToProps(state) {
    return { 
            loading: state.loading,
            user: state.auth.user,
            tasks: state.tasks
        } 
}

export default connect(mapStateToProps, actions)(Todo);