import React from 'react';

export default function Register({ onRegisterSubmit }) {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <p className="rank">Register</p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-block submit-button"
          onClick={onRegisterSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
