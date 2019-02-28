import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, number, email } = this.props.contact;
    return (
      <div className='card mt-3'>
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{number}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;