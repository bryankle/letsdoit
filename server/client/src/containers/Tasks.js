import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import TaskItem from '../components/TaskItem';
import { connect } from 'react-redux';
import * as actions from '../actions';


  // Map over task items and set filters on different tabs

class Tabs extends Component {

    render() {
            console.log('USER TASKS RENDERING');
            console.log('this.props', this.props)
            const userTasks = this.props.tasks;
            console.log('userTasks', userTasks)
            let activeTasks = [];
            let completedTasks = [];
            let allTasks = [];

            this.props.tasks.forEach((task) => {

                if (!task.completed) {
                    activeTasks.push(<TaskItem 
                        handleClick={() => {
                            // Send to database task completion
                            this.props.completeTask(task.userId, task.id) // userId, taskId
                        }}
                        // Render unchecked box for incompleted tasks
                        completed={false}
                        task={task.content} />)
                    // Beginning a checkbox on new line
                    activeTasks.push(<br/>);
                }

                else {
                    completedTasks.push(
                        <TaskItem 
                            completed={true}
                            task={task.content} />
                        )
                    completedTasks.push(<br/>);
                }

                allTasks.push(
                        <span>
                            <TaskItem 
                                completed={task.completed ? true : false}
                                task={task.content} 
                            />
                            <br/>
                        </span>
                        )
            })
            console.log('allTasks')
            console.log(allTasks.forEach(function(val) {
                console.log(val);
            }))

            let panes = [
                        { menuItem: 'Active', pane: activeTasks},
                        { menuItem: 'Completed', pane: completedTasks },
                        { menuItem: 'All', pane: allTasks.sort(function(a, b) {
                console.log('alltask filtering')
                // console.log(val.props.children[0].props.completed)
                // return val.props.children[0].props.completed !== true
                return a.props.children[0].props.completed - b.props.children[0].props.completed
            })},
                    ]

            return (
                <Tab panes={panes} renderActiveOnly={false} />
            )
        }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    auth: state.auth,
    test: state
  }
}


export default connect(mapStateToProps, actions)(Tabs);


