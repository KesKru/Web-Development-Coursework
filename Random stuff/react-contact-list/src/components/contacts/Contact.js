import React, { Component } from 'react';
import { Consumer } from '../../context';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
  showHideContact = (id, dispatch) => {
    dispatch({
      type: 'HIDE_CONTACT',
      payload: id
    });
  };

  deleteContact = (id, dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) => {
        dispatch({
          type: 'DELETE_CONTACT',
          payload: id
        });
      })
      .catch((err) => {
        // only adding dispatch() in .cath becouse we are using fake json api so we get error on delete request
        dispatch({
          type: 'DELETE_CONTACT',
          payload: id
        });
      })
  };

  render() {
    const { id, name, phone, email, showContactInfo } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mt-3'>
              <div className='card-body'>
                <h5>{name}
                  <i onClick={this.showHideContact.bind(this, id, dispatch)} className="fas fa-angle-down"></i>
                  <i onClick={this.deleteContact.bind(this, id, dispatch)} className="fas fa-times"></i>
                  <Link to={'/contact/edit/' + id}>
                    <i className="fas fa-pen"></i>
                  </Link>
                </h5>
                {showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
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