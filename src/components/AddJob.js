import React, { Component } from 'react';

class AddJob extends Component {
  constructor(){
    super();
    this.state = {
      newJob: {}
    }
  }

  static defaultProps = {
    catergories: ['React', 'Node']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newJob:{
        title: this.refs.title.value,
        catergory: this.refs.catergory.value,
        salary: this.refs.salary.value
      }}, function(){
        console.log(this.state);
      });
    }
    e.preventDefault();
  }

  render(){
    let catergoryOptions = this.props.catergories.map(catergory => {
      return <option key={catergory} value={catergory}>{catergory}</option>
    })

    return (
      <div>
        <h3>Add Job</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Catergory</label>
            <select ref="catergory">
              {catergoryOptions}
            </select>
          </div>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Salary</label>
            <input type="text" ref="salary" />
          </div>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}

export default AddJob;
