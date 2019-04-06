const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/keys');
// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
// Instatiate router
const router = express.Router();
// Load User model
const User = require('../../models/User');

// @route GET api/users/all
// @description Get all users
// @access Public
router.get('/all', (req, res) => {
  const errors = {};
  User.find()
    .then((users) => {
      if (!users) {
        errors.nousers = 'There are no users for this user';
        return res.status(400).json(errors);
      }
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// @route POST api/users/register
// @description Register a user
// @access Public
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const { errors, isValid } = validateRegisterInput(req.body);
  // validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: email }).then((user) => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
      const newUser = new User({
        name: name,
        email: email,
        avatar: avatar,
        password: password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newUser.password = hash;
          newUser
            .save()
            .then((savedUser) => {
              res.json(savedUser);
            })
            .catch((err) => {
              res.json(err);
            });
        });
      });
    }
  });
});

// @route POST api/users/register
// @description Login user / Return token
// @access Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validateLoginInput(req.body);
  // validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: email }).then((user) => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create jwt payload
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };
        // Sign token
        jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
      } else {
        errors.password = 'Password incorect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route POST api/users/current
// @description return current user
// @access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
