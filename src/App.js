import React, { Component } from 'react';
import logo from './worldclock.png';
import './App.css';

import Clock from './clock.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }
  


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>World Clock</h2>
        </div>
        <Clock name="Atlanta" time={this.state.currentTime.toLocaleTimeString()} />
        <Clock name="Boston" time={this.state.currentTime.toLocaleTimeString()} />
        <Clock name="Chicago" time={this.state.currentTime.toLocaleTimeString()} />
      </div>
    );
  }
}

export default App;
