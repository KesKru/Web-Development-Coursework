import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({ loginEmail: event.target.value });
  };

  onPaswordChange = (event) => {
    this.setState({ loginPassword: event.target.value });
  };

  onLoginSubmit = () => {
    const { loginEmail, loginPassword } = this.state;
    const { loadUser, isLogedInTrue } = this.props;
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    })
      .then((userData) => userData.json())
      .then((userData) => loadUser(userData));
    isLogedInTrue();
  };

  render() {
    const { onEmailChange, onPaswordChange, onLoginSubmit } = this;
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <p className="rank">Login</p>
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
              onClick={onLoginSubmit}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
