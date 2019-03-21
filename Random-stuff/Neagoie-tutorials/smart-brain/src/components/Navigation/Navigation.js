import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <nav className="nav">
        <div className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="">
          <Link className="nav-link" to="/login">
            Log In
          </Link>
        </div>
        <div className="">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
