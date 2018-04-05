import React, { Component } from 'react';

class JobItem extends Component {
  render(){
    console.log(this.props)
    return (
      <li><strong>{this.props.job.title}</strong>: £{this.props.job.salary}</li>
    );
  }
}

export default JobItem;
