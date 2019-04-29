import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPaswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onRegisterSubmit = () => {
    const { registerName, registerEmail, registerPassword } = this.state;
    const { loadUser } = this.props;

    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword
      })
    })
      .then((userData) => userData.json())
      .then((userData) => loadUser(userData));
  };

  render() {
    const {
      onNameChange,
      onEmailChange,
      onPaswordChange,
      onRegisterSubmit
    } = this;

    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <p className="rank">Register</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Name"
              onChange={onNameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={onPaswordChange}
            />
          </div>
          <Link to="/">
            <button
              type="submit"
              className="btn btn-outline-primary btn-block submit-button"
              onClick={onRegisterSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
