import React, { Component } from 'react';

export default class RenderFrame extends Component {
  getDeafaultProps(){
    return {
      jobName: 'Job Name',
      jobDescription: 'Job Description', jobSalary: '20000'
    };
  };

  render(){
    return (
        <ul>
          <li>{this.props.jobName}</li>
          <li>{this.props.jobDescription}</li>
          <li>{this.props.jobSalary}</li>
        </ul>
    )
  }

}
