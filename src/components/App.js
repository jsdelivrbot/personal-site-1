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
        <ul role="nav" id="main-nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
