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
    <div className="icon-container">
      <div className="code-icons">
        {setOne}
      </div>
      <div className="code-icons">
        {setTwo}
      </div>
    </div>
  )
}

export default CodeIcon;
