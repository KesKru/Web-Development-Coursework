import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';


class AddContact extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    number: '',
    showContactInfo: true
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, number, showContactInfo } = this.state;
    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      number: number,
      showContactInfo: showContactInfo
    }
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact
    });
    this.setState({
      id: '',
      name: '',
      email: '',
      number: ''
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, number } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card new-contact'>
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name
                    <input
                        type="text"
                        name='name'
                        className='form-control'
                        placeholder='enter name...'
                        value={name}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email
                    <input
                        type="email"
                        name='email'
                        className='form-control'
                        placeholder='enter email...'
                        value={email}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Number
                    <input
                        type="text"
                        name='number'
                        className='form-control'
                        placeholder='enter number...'
                        value={number}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>
                  <input
                    type="submit"
                    className='btn btn-light btn-block'
                    value='Add contact' />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
