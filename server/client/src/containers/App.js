import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import Navbar from './Navbar';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import TodoContainer from './TodoContainer';
import RequireAuth from './auth/require_auth'; // Higher Order Component to secure individual routes with authentication
import Features from './Features';
import Welcome from './Welcome';
import SidebarMenu from './SidebarMenu';
import GroupList from './GroupList';
import GroupPage from './GroupPage';
import UserPage from './UserPage';
import axios from 'axios'; // Testing with axios

/*

App
|_Navbar
|_TodoContainer
  |_Input
  |_ProgressBar
  |_Tasks
    |_TaskItem


*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: localStorage.name
    }
  }
  // Initial task fetching
    // componentDidMount contacts API to request tasks from server which contacts database for tasks
    // Tasks are received and sent to Redux store as 'task' property


  componentDidMount() {
    // For when user is already logged in to load tasks
    this.props.auth.authenticated ? this.props.loadTasks(this.state.currentUser) : '';
    console.log("componentDidMount - TESTING API END POINT")
    console.log(this.props)


  }

  render() {
    console.log('From APP');
    console.log(this.props)
    return (
      <Router>
      <div className="App">
        <Navbar />

        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='overlay' width='thin' icon='labeled' visible={this.props.sidebar.visibility} vertical inverted>
            <Link to="/tasks">
              <Menu.Item onClick={() => console.log('hello world')} onClickname='my-tasks'>
                <Icon name='user' />
                My Tasks
              </Menu.Item>
            </Link>
            <Link to="/groups">
              <Menu.Item onClick={() => console.log('hello world')} name='group-tasks'>
                <Icon name='users' />
                Group Tasks
              </Menu.Item>
            </Link>
            <Menu.Item onClick={() => this.props.clearCompletedTasks(localStorage.user)} name='settings'>
              <Icon name='trash' />
              Clear Completed
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher style={{ height: '100vh'}}>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/tasks" component={RequireAuth(UserPage)} />
                <Route path="/groups" component={GroupList} />
                <Route path="/group/:groupId" component={GroupPage}/>
                <Route path="/features" component={RequireAuth(Features)} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
              </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    auth: state.auth,
    sidebar: state.sidebar
  }
}


export default connect(mapStateToProps, actions)(App);
