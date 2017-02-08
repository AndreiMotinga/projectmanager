import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/projects';
import AddProject from './components/addProject';
// import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({todos: data}, function () {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Cart",
        category: "Web development"
      }
    ]});
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }


  handleAddProject(project) {
    const projects = this.state.projects.slice();
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    const projects = this.state.projects.filter(project => project.id !== id);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <h1>My app</h1>
        <h2>My projects </h2>
        <AddProject addNewProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}
                  onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        {/* todo display todos */}
      </div>
      );
  }
}

export default App;
