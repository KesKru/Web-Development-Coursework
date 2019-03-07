import React, { Component } from 'react'
import { Consumer } from '../../context';
import NewContactInput from '././NewContactInput';
import uuid from 'uuid';


class AddContact extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    number: '',
    showContactInfo: true,
    errors: {}
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, number, showContactInfo } = this.state;
    
    if (name === '') {
      this.setState({errors: {name: 'Name is required !'}})
      return;
    }
    if (email === '') {
      this.setState({errors: {email: 'Name is required !'}})
      return;
    }
    if (number === '') {
      this.setState({errors: {number: 'Name is required !'}})
      return;
    }


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
      number: '',
      errors: {}
    })

    this.props.history.push('/');
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, number, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card new-contact'>
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <NewContactInput
                    label='Name'
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='enter name...'
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <NewContactInput
                    label='Email'
                    type="email"
                    name='email'
                    className='form-control'
                    placeholder='enter email...'
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <NewContactInput
                    label='Number'
                    type="text"
                    name='number'
                    className='form-control'
                    placeholder='enter number...'
                    value={number}
                    onChange={this.onChange}
                    error={errors.number}
                  />
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
