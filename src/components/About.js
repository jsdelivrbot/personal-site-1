import React from 'react';
import icons from './icons';
import CodeIcon from './CodeIcon';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClass: 'show',
      text: 'Hi',
      clicked: false,
      textClass: 'hidden'
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover() {
    this.setState({
      iconClass: 'hidden',
      text: 'JavaScript'
    })
  }

  handleClick() {
    if (this.state.clicked) {
      this.setState({
        iconClass: 'hidden',
        clicked: true,
        text: 'JavaScript'
      });
    } else {
      this.setState({
        iconClass: 'show',
        clicked: false,
        text: ''
      })
    }

  }

  render() {
    return (
      <div className="content">
        <h2>About</h2>
        <p>Hello!</p>
        <CodeIcon
          icons={icons}
          className={this.state.iconClass}
          onClick={this.handleClick}
          onMouseOver={this.handleHover} />
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default About;
