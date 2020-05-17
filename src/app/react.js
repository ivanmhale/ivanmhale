import React from 'react';
import ReactDOM from 'react-dom';
import projects from './projects';

class Project extends React.Component {
  render() {
    const { logo, cover, name, link, description } = this.props.project;
    return (
      <div onClick={() => window.open(link, '_blank')} className="project">
        <div className="side side_1">
          <img src={logo} alt={name} />
        </div>
        <div className="side side_2">
          <a rel="noopener noreferrer">
            <img src={cover} alt={name} />
            <div className="description">
              <p>{description}</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

const Projects = () => {
  return projects.map((p) => <Project key={p.name} project={p} />);
};

ReactDOM.render(<Projects />, document.getElementById('projects'));
