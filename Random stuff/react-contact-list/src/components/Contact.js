import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

  render() {
    const { name, number, email, id, showContactInfo } = this.props.contact;
    return (
      <div className='card mt-3'>
        <div className='card-body'>
          <h4>{name}
            <i onClick={this.props.showHideContact.bind(this, id)} className="fas fa-angle-down"></i>
            <i onClick={this.props.deleteContact.bind(this, id)} className="fas fa-times"></i>
          </h4>
          {showContactInfo ? (<ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{number}</li>
          </ul>) : null}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  showHideContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default Contact;