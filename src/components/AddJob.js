import React, { Component } from 'react';

class AddJob extends Component {
  static defaultProps = {
    catergories: ['React', 'Node']
  }

  render(){
    let catergoryOptions = this.props.catergories.map(catergory => {
      return <option key="catergory" value={catergory}>{catergory}</option>
    })

    return (
      <div>
        <h3>Add Job</h3>
        <form>
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
        </form>
      </div>

    );
  }
}

export default AddJob;
