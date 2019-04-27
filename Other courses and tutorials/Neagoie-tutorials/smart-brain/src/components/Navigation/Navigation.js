import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({
  isLogedIn,
  isLogedInFalse,
  isLogedInTrue
}) {
  return (
    <header>
      <nav className="nav">
        <div className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        {isLogedIn ? (
          <div className="">
            <Link className="nav-link" to="/" onClick={isLogedInFalse}>
              Logout
            </Link>
          </div>
        ) : (
          <React.Fragment>
            <div className="">
              <Link className="nav-link" to="/login">
                LogIn
              </Link>
            </div>
            <div className="">
              <Link className="nav-link" to="/register" onClick={isLogedInTrue}>
                Register
              </Link>
            </div>
          </React.Fragment>
        )}
      </nav>
    </header>
  );
}
