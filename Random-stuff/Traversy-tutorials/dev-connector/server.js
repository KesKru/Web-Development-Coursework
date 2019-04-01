const express = require('express');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const mongoose = require('mongoose');
const app = express();

// db config
mongoose
  .connect('mongodb://localhost/dev-connector', { useNewUrlParser: true })
  .then(() => {
    console.log('mongoDB conected');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello !!');
});

// Use routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on ' + (process.env.PORT || 3000));
});

// mongoose.connect("mongodb://localhost/dev-connector", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// });
