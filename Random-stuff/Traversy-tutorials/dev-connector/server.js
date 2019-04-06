const express = require('express');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();

// Body parser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
mongoose
  .connect(keys.dbUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB conected...');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello !!');
});

// Passport middlewere
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on ' + (process.env.PORT || 3000) + '...');
});
