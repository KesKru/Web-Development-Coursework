const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateProfileInput = (data) => {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be between 2 and 40 characters';
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle is required';
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status is required';
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills is required';
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not valid URL';
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not valid URL';
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not valid URL';
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not valid URL';
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not valid URL';
    }
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateProfileInput;
