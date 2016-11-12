import React from 'react';
import icons from './icons';
import CodeIcon from './CodeIcon';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="skills content">
        <h2 className="page-header">Skills</h2>
        <CodeIcon
          icons={icons} />

        <h4 className="intro outro">And <span className="bright">I love to learn.</span> Teach me something new? Lets geek out about code. Lets get involved in something together! </h4>
      </div>
    )
  }
}

export default Skills;
