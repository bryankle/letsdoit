import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import TaskItem from '../components/TaskItem';

import { connect } from 'react-redux';


  // Map over task items and set filters on different tabs

class Tabs extends Component {

    render() {
        console.log('USER TASKS RENDERING')
        const userTasks = this.props.tasks;
        let activeTasks = [];
        let completedTasks = [];
        let allTasks = [];
        let panes = [
                    { menuItem: 'Active', pane: activeTasks},
                    { menuItem: 'Completed', pane: completedTasks },
                    { menuItem: 'All', pane: allTasks },
                ]

        userTasks.forEach((task) => {
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
    authenticated: state.authenticated
  }
}


export default connect(mapStateToProps, null)(Tabs);


