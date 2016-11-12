import React from 'react';
import NavLink from './NavLink';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      {this.props.children}

      <div className="navigation">
      <ul id="icons">
        <li><a href="http://github.com/anniehck" target="_blank"><i className="devicon-github-plain devicon" /></a></li>
        <li><a href="http://www.linkedin.com/in/anniehckim" target="_blank"><i className="fa fa-linkedin-square devicon" /></a></li>
      </ul>
        <ul role="nav" id="main-nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
