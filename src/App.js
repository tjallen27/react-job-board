import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddJob from './components/AddJob';
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
        catergory: 'React',
        title: 'Junior React Developer',
        salary: '28000'
      },
      {
        catergory: 'Node',
        title: 'Junior Node Developer',
        salary: '34000'
      }
    ]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddJob />
        <Jobs jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default App;
