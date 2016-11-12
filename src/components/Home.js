import React from 'react';
import ContactForm from './ContactForm';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: '',
      clicked: false,
      closed: false,
      formClass: 'contact-modal hidden'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    if (this.state.clicked) {
      this.setState({
        form: '',
        formClass: 'contact-modal hidden',
        clicked: false
      });
    } else {
      this.setState({
        form: <ContactForm handleClose={this.handleClose} />,
        formClass: 'contact-modal block',
        clicked: true
      });
    }
  }

  handleClose() {
    this.setState({
      formClass: 'contact-modal hidden'
    })


  }

  render() {
    return (
      <div className="home content">
        <h2 className="page-header">Hey Im Annie!</h2>
        <h4 className="intro">Developer, Designer, Artist, Dreamer, Enthusiast.</h4>

        <button className="contact" onClick={this.handleClick}>Contact</button>
        <a href="https://github.com/anniehck" target="_blank"><button className="github">Github</button></a>
        <button className="cv">CV</button>
        <br />
          <i className="fa fa-code" />

        <div className={this.state.formClass}>
        {this.state.form}
        </div>

      </div>
    )
  }
}

export default Home;
