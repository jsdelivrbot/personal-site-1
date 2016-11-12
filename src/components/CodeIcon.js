import React from 'react';

const CodeIcon = props => {
  let setOne = props.icons[0].map(icon => {
    let iconClass = `${icon} colored devicon`;
    let index = props.icons[0].indexOf(icon);
    return (
      <i
        key={index}
        className={iconClass}
        />
    );
  })
  let setTwo = props.icons[1].map(icon => {
    let iconClass = `${icon} colored devicon`;
    let index = props.icons[1].indexOf(icon);
    return (
      <i key={index} className={iconClass}></i>
    );
  })

  return (
    <div>
      <div className="skill-content">
        <h4 className="intro"><span className="bright">I love to code.</span> I'm a creative problem-solver & abstract thinker.</h4>
        <div className="icon-container">
          <div className="code-icons">
            {setOne}
          </div>
        </div>
      </div>

      <div className="skill-content">
        <h4 className="intro"><span className="bright">I love to design.</span> I'm a visual learner & value aesthetics more than anything.</h4>
        <div className="icon-container">
          <div className="code-icons">
            {setTwo}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeIcon;
