import React, { Component } from 'react';
import JobItem from './JobItem';

class Job extends Component {
  render(){
    let jobItems;
    if(this.props.jobs){
      jobItems = this.props.jobs.map(job => {
        return (
          <JobItem key={job.title} job={job} />
        );
      })
    }
    return (
      <div>
        <h3>Jobs</h3>
        {jobItems}
      </div>

    );
  }
}

export default Job;
