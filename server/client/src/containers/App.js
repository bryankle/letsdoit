import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import axios from 'axios';
import Header from '../components/Header';
import TaskInput from '../components/TaskInput';
import Login from './Login';
import Registration from './Registration';
import TodoContainer from './TodoContainer';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('/api')
      .then(res => this.setState({ data: res.data }))
  }

  render() {

    console.log(this.state);
    const keys = Object.keys(this.state.data);
    const dataList = keys.map((val) => {
      return <li>{val + ': ' + this.state.data[val]}</li>
    })

    return (
      <div className="App">
        <Header />
        <TodoContainer />
         
      </div>
    );
  }
}

export default App;
