const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();

// Load input validation
const validateProfileInput = require('../../validation/profile');
const validateExperianceInput = require('../../validation/experiance');
const validateEducationInput = require('../../validation/education');

// Load models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profiles
// @description Get current users profile
// @access Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar'])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = 'There is no profile';
          return res.status(400).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
);

// @route GET api/profiles/all
// @description Get all profiles
// @access Public
router.get('/all', (req, res) => {
  const errors = {};
  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofiles = 'There are no profiles for this user';
        return res.status(400).json(errors);
      }
      res.json(profiles);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// @route GET api/profiles/handle/:handle
// @description Get profile by handle
// @access Public
router.get('/handle/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// @route GET api/profiles/user/:user_id
// @description Get profile by user id
// @access Public
router.get('/user/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// @route POST api/profiles
// @description Create user profile
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    // check validation
    if (!isValid) {
      // return erros object
      return res.status(400).json(errors);
    }
    //proffile fields object construction
    const profileFields = {};
    profileFields.user = req.user;

    if (req.body.handle) {
      profileFields.handle = req.body.handle;
    }
    if (req.body.company) {
      profileFields.company = req.body.company;
    }
    if (req.body.website) {
      profileFields.website = req.body.website;
    }
    if (req.body.location) {
      profileFields.location = req.body.location;
    }
    if (req.body.status) {
      profileFields.status = req.body.status;
    }
    //Skills need to be split into array
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }
    if (req.body.bio) {
      profileFields.bio = req.body.bio;
    }
    if (req.body.githubusername) {
      profileFields.githubusername = req.body.githubusername;
    }
    if (req.body.experiance) {
      profileFields.experiance = req.body.experiance;
    }
    if (req.body.education) {
      profileFields.education = req.body.education;
    }
    //Social is nested object, need to declare it first
    profileFields.social = {};
    if (req.body.youtube) {
      profileFields.social.youtube = req.body.youtube;
    }
    if (req.body.twitter) {
      profileFields.social.twitter = req.body.twitter;
    }
    if (req.body.facebook) {
      profileFields.social.facebook = req.body.facebook;
    }
    if (req.body.linkedin) {
      profileFields.social.linkedin = req.body.linkedin;
    }
    if (req.body.instagram) {
      profileFields.social.instagram = req.body.instagram;
    }
    if (req.body.date) {
      profileFields.date = req.body.date;
    }
    //-----------------------------------------------------
    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        // update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => {
          res.json(profile);
        });
      } else {
        // create profile
        // check if handle exists
        Profile.findOneAndUpdate({ handle: profileFields.handle }).then(
          (profile) => {
            if (profile) {
              errors.handle = 'That handle already exists';
              res.status(400).json(errors);
            }
            //save profile
            new Profile(profileFields).save().then((profile) => {
              res.json(profile);
            });
          }
        );
      }
    });
    // .catch((err) => {
    //   return res.status(400).json(err);
    // });
  }
);

// @route POST api/profiles/experiance
// @description Add experiance to profile
// @access Private
router.post(
  '/experiance',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //check validation
    const { errors, isValid } = validateExperianceInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user._id })
      // .populate('user', ['name', 'avatar'])
      .then((profile) => {
        const errors = {};
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(400).json(errors);
        }
        const newExp = {
          title: req.body.title,
          company: req.body.company,
          location: req.body.location,
          from: req.body.from,
          to: req.body.to,
          current: req.body.current,
          description: req.body.description
        };

        //add to exp array
        profile.experiance.unshift(newExp);
        // Save the profile
        profile.save().then((profile) => {
          res.json(profile);
        });

        // res.json(profile);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
);

// @route POST api/profiles/experiance
// @description Add education to profile
// @access Private
router.post(
  '/education',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //check validation
    const { errors, isValid } = validateEducationInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user._id })
      // .populate('user', ['name', 'avatar'])
      .then((profile) => {
        const errors = {};
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(400).json(errors);
        }
        const newEdu = {
          school: req.body.school,
          degree: req.body.degree,
          fieldofstudy: req.body.fieldofstudy,
          from: req.body.from,
          to: req.body.to,
          current: req.body.current,
          description: req.body.description
        };

        //add to exp array
        profile.education.unshift(newEdu);
        // Save the profile
        profile.save().then((profile) => {
          res.json(profile);
        });

        // res.json(profile);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
);

// @route DELETE api/profiles/experiance/:edu_id
// @description Delete experiance form profile
// @access Private
router.delete(
  '/experiance/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //check validation

    Profile.findOne({ user: req.user._id })
      // .populate('user', ['name', 'avatar'])
      .then((profile) => {
        const errors = {};
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(400).json(errors);
        }
        //get index of item to remove
        const removeIndex = profile.experiance
          .map((item) => {
            item._id;
          })
          .indexOf(req.params.exp_id);
        //remove item
        profile.experiance.splice(removeIndex, 1);
        //resave experiance
        profile.save().then((profile) => {
          res.json(profile);
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
);

// @route DELETE api/profiles/education/:edu_id
// @description Delete education form profile
// @access Private
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //check validation

    Profile.findOne({ user: req.user._id })
      // .populate('user', ['name', 'avatar'])
      .then((profile) => {
        const errors = {};
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(400).json(errors);
        }
        //get index of item to remove
        const removeIndex = profile.education
          .map((item) => {
            item._id;
          })
          .indexOf(req.params.edu_id);
        //remove item
        profile.education.splice(removeIndex, 1);
        //resave experiance
        profile.save().then((profile) => {
          res.json(profile);
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
);

// @route DELETE api/profiles
// @description Delete user and profile
// @access Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user._id })
      .then((profile) => {
        User.findOneAndRemove({ _id: req.user._id }).then(() => {
          res.json({ success: true });
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
);

module.exports = router;
