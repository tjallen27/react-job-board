import React, { Component } from 'react';

class JobItem extends Component {
  render(){
    console.log(this.props)
    return (
      <ul>
      <li>{this.props.job.catergory}</li>
      <li><strong>{this.props.job.title}</strong>: £{this.props.job.salary}</li>
      </ul>
    );
  }
}

export default JobItem;
