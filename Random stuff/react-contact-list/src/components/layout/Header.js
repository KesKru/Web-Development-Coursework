import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { branding } = props;
  return (
    <div className='header'>
      <h1>{branding}</h1>
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