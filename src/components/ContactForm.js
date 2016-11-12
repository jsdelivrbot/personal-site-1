import React from 'react';

const ContactForm = props => {
  return (
    <form id="contact-form" action="mailto:anniehckim@gmail.com">
    <i className="fa fa-close" onClick={props.handleClose} />
      <div className="field">
      <label>Name</label>
      <input type="text" />
      </div>

      <div className="field">
      <label>Email</label>
      <input type="email" />
      </div>

      <div className="field">
      <label>Comment</label>
      </div>
      <div className="field">
      <textarea placeholder="Drop me a line!">
      </textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm;
