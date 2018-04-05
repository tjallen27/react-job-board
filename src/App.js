import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Jobs from './components/Jobs';

class App extends Component {

  constructor(){
      super();
    this.state = {
      jobs: []
    }
  }

  componentWillMount(){
    this.setState({ jobs: [
      {
        title: 'Junior React Developer',
        salary: '28000'
      },
      {
        title: 'Junior Node Developer',
        salary: '34000'
      }
    ]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Jobs jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default App;
