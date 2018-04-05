import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RenderFrame from './components/RenderFrame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="jobList">
          <ul>
            <li>Job Tite</li>
            <li>Job Salary</li>
            <li>Job Description</li>
            <li>Job created</li>
          </ul>
        </div>
        <div className="renderFrame">
          <RenderFrame />
        </div>
      </div>
    );
  }
}

export default App;
