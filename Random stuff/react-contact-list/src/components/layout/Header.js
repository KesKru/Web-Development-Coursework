import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;
  return (
    <div className='header mb-2'>
      <div className='container'>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link className="navbar-brand" to="/">{branding}</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">Add contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/test">test</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My app'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;