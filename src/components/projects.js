import React, { Component } from 'react';
import Project from './project';

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projects;
    if (this.props.projects) {
      projects = this.props.projects.map(project => {
        return (
          <Project onDelete={this.deleteProject.bind(this)}
                   key={project.id}
                   project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <ul>
          {projects}
        </ul>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
