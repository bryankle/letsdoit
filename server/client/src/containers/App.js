import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTasks } from '../actions/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Header from '../components/Header';
import TodoContainer from './TodoContainer';
import RequireAuth from './auth/require_auth'; // Higher Order Component to secure individual routes with authentication
import Features from './Features';
import Welcome from './Welcome';


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
      data: {}
    }
  }
  // Initial task fetching
    // componentDidMount contacts API to request tasks from server which contacts database for tasks
    // Tasks are received and sent to Redux store as 'task' property


  componentDidMount() {
    // axios.get('/api')
    //   // .then(data => this.props.loadTasks(data))
    //   .then(res => {
    //     console.log('res', res)
    //     this.props.loadTasks(res.data) // Redux action, required
    //   })
      this.props.loadTasks();
    // axios.post('/signup', {
    //   "name": 'lol',
    //   "password": "test"
    // })
  }

  render() {
    return (
      <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/tasks" component={RequireAuth(TodoContainer)} />
          <Route path="/features" component={RequireAuth(Features)} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
        </Switch>
      </div>

      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadTasks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
