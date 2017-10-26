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
        console.log('hello from todocontainer');
        // this.props.loadTasks(localStorage.user)

        setTimeout(() => {
            this.props.loadingComplete();
        }, 1000)
    }

    render() {
        console.log('this.props')
        console.log(this.props)
        if (!this.props.loading.status) {
            return(
                <div>
                    <Header/>

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

function mapStateToProps(state) {
    return { 
            loading: state.loading,
            user: state.auth.user
        } 
}

export default connect(mapStateToProps, actions)(Todo);