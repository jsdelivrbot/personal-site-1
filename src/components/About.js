import React from 'react';
import icons from './icons';
import CodeIcon from './CodeIcon';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div className="about content">
        <h2 className="page-header">About</h2>
        <h4 className="intro">My developer toolset.</h4>
        <CodeIcon
          icons={icons} />

        <h4 className="intro">& A little paragraph.</h4>
        <p>With a background in visual art, I initially found interest in web design and continued to pursue web development with Ruby and JavaScript. I find the capacity for programming languages to engage both conceptually creative and logical thinking is fascinating and I look forward to expanding myself in a field of constant innovation. While I work best collaboratively, I also thrive as an independent thinker and problem-solver. I am incredibly driven by my passions and my life-long goal is to never stop learning. I seek the challenge of creating and building for the world.
        </p>

      </div>
    )
  }
}

export default About;
