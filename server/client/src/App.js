import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ul>{dataList}</ul>
        </p>
      </div>
    );
  }
}

export default App;
