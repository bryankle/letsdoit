import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import TaskItem from '../components/TaskItem';
import { connect } from 'react-redux';
import * as actions from '../actions';


  // Map over task items and set filters on different tabs

class Tabs extends Component {

    render() {
            console.log('USER TASKS RENDERING')
            const userTasks = this.props.tasks;
            console.log('userTasks', userTasks)
            let activeTasks = [];
            let completedTasks = [];
            let allTasks = [];
            let panes = [
                        { menuItem: 'Active', pane: activeTasks},
                        { menuItem: 'Completed', pane: completedTasks },
                        { menuItem: 'All', pane: allTasks },
                    ]

            this.props.tasks.forEach((task) => {
                console.log(task)
                if (!task.completed) {
                    activeTasks.push(<TaskItem task={task.content} />)
                    activeTasks.push(<br/>);
                }
                else {
                    completedTasks.push(<TaskItem task={task.content} />)
                    completedTasks.push(<br/>);
                }
                allTasks.push(<TaskItem task={task.content} />)
                allTasks.push(<br/>);
            })
            console.log(activeTasks)
            console.log('authenticated', this.props.authenticated)
            return (
                <Tab panes={panes} renderActiveOnly={false} />
            )
        }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    auth: state.auth
  }
}


export default connect(mapStateToProps, actions)(Tabs);


