import React, { Component } from 'react';
import { Tab, Checkbox } from 'semantic-ui-react';
import TaskItem from './TaskItem';


  // Map over task items and set filters on different tabs

class Tabs extends Component {
    render() {

        const allTasks = this.props.allTasks;
        let activeTasks = [];
let panes = [
            { menuItem: 'Active', pane: activeTasks},
            { menuItem: 'Completed', pane: [<p>hello</p>, <h1>world</h1>] },
            { menuItem: 'All', pane: 'Tab 3 Content' },
          ]

        allTasks.forEach((task) => {
            activeTasks.push(<TaskItem task={task.task} />)
            activeTasks.push(<br/>)
        })

        return (
            <Tab panes={panes} renderActiveOnly={false} />
        )
    }
}

export default Tabs;