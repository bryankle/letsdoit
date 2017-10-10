import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTasks } from '../actions/index';

import Header from '../components/Header';
import Login from './Login';
import Registration from './Registration';
import TodoContainer from './TodoContainer';
/*

App
|_Header
|_TodoContainer
  |_Input
  |_ProgressBar
  |_Tabs
    |_TaskItem


*/

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('/api')
      // .then(data => this.props.loadTasks(data))
      .then(res => {
        console.log('res', res)
        this.props.loadTasks(res.data)
        this.setState({ data: res.data })
      })
      .then(() => console.log('this.props', this.props))
  }

  render() {
    const keys = Object.keys(this.state.data);
    const dataList = keys.map((val) => {
      return <li>{val + ': ' + this.state.data[val]}</li>
    })

    return (
      <div className="App">
        <Header />
        <h1>{this.state.data[0] ? 'Welcome, ' + this.state.data[0].name : 'Welcome'}</h1>
        <TodoContainer allTasks={this.state.data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadTasks }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
