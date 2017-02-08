import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    e.preventDefault();

    // validation
    if (this.refs.title.value === '') {
      return alert("Title is required")
    }

    // update state
    const newProject = {
      newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    }
    this.setState(newProject, function () {
      this.props.addNewProject(this.state.newProject);
    })

    // clear input
    this.refs.title.value = '';
    this.refs.category.value = this.props.categories[0];
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      )
    });
    return (
      <div className="AddProject">
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-control">
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div className="form-control">
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  addNewProject: React.PropTypes.func,
  categories: React.PropTypes.array
}

export default AddProject;
