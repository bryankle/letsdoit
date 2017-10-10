import React, { Component } from 'react';
import { Tab, Checkbox } from 'semantic-ui-react';
import TaskItem from './TaskItem';


  // Map over task items and set filters on different tabs

class Tabs extends Component {

    render() {
        // Retrieve all tasks and filter by tab

        const userTasks = this.props.allTasks;
        console.log('userTasks', userTasks)
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

        return (
            <Tab panes={panes} renderActiveOnly={false} />
        )
    }
}

export default Tabs;


