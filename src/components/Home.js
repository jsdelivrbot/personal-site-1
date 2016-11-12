import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="home content">
        <h2 className="page-header">Hey Im Annie!</h2>
        <h4 className="intro">Developer, Designer, Artist, Dreamer, Enthusiast.</h4>
        <button className="contact">Contact</button><br />
        <i className="fa fa-heart-o sm" />
        <i className="fa fa-code" />

      </div>
    )
  }
}

export default Home;
