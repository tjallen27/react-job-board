import React, { Component } from 'react';

class JobItem extends Component {
  render(){
    console.log(this.props)
    return (
      <li>{this.props.job.title}: {this.props.job.salary}</li>
    );
  }
}

export default JobItem;
