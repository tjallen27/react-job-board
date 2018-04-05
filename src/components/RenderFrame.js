import React, { Component } from 'react';

export default class RenderFrame extends Component {
  getInitialState(){
    return { jobName: 'Job Name', jobDescription: 'Job Description', jobSalary: '' };
  };

  render(){
    return (
        <ul>
          <li>{this.jobName}</li>
          <li>{this.jobDescription}</li>
          <li>{this.jobSalary}</li>
        </ul>
    )
  }

}
