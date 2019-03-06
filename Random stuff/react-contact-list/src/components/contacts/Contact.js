import React, { Component } from 'react';
import { Consumer } from '../../context';
import PropTypes from 'prop-types';

class Contact extends Component {
  showHideContact = (id, dispatch) => {
    dispatch({
      type: 'HIDE_CONTACT',
      payload: id
    });
  };

  deleteContact = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
  };

  render() {
    const {id, name, number, email, showContactInfo } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mt-3'>
              <div className='card-body'>
                <h4>{name}
                  <i onClick={this.showHideContact.bind(this, id, dispatch)} className="fas fa-angle-down"></i>
                  <i onClick={this.deleteContact.bind(this, id, dispatch)} className="fas fa-times"></i>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{number}</li>
                </ul>) : null}
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // showHideContact: PropTypes.func.isRequired,
  // deleteContact: PropTypes.func.isRequired
};

export default Contact;