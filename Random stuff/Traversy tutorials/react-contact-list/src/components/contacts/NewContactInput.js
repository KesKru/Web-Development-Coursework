import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function NewContactInput(props) {
  const { label, type, name, placeholder, value, onChange, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}
        <input
          type={type}
          name={name}
          className={classNames('form-control',{'is-invalid' : error})}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className='invalid-feedback'>{error}</div>
      </label>
    </div>
  )
};

NewContactInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default NewContactInput;