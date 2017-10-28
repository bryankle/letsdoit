import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTasks } from '../actions/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import Navbar from './Navbar';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import TodoContainer from './TodoContainer';
import RequireAuth from './auth/require_auth'; // Higher Order Component to secure individual routes with authentication
import Features from './Features';
import Welcome from './Welcome';
import SidebarMenu from './SidebarMenu'

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
      data: {},
      currentUser: localStorage.user
    }
  }
  // Initial task fetching
    // componentDidMount contacts API to request tasks from server which contacts database for tasks
    // Tasks are received and sent to Redux store as 'task' property


  componentDidMount() {
    // For when user is already logged in to load tasks
    this.props.auth.authenticated ? this.props.loadTasks(this.state.currentUser) : '';
    console.log("componentDidMount")
    console.log(this.props);
    console.log('localStorage', localStorage.user)
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
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher style={{backgroundColor: 'pink', height: '100vh'}}>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/tasks" component={RequireAuth(TodoContainer)} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadTasks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
