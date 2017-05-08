import React, { Component } from 'react';


class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['EV', 'Tuner', 'Exotic', 'Ricer']
    }

    handleSubmit(e){
        console.log(this.refs.title.value);
        e.preventDefault();
    }

  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value="category">{category}</option>
      });
    return (
      <div >
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
