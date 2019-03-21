const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: '1',
      name: 'John',
      email: 'John@gmail.com',
      password: 'John123',
      entries: 0,
      joined: new Date()
    },
    {
      id: '2',
      name: 'Mike',
      email: 'Mike@gmail.com',
      password: 'Mike123',
      entries: 0,
      joined: new Date()
    },
    {
      id: '3',
      name: 'Judy',
      email: 'Judy@gmail.com',
      password: 'Judy123',
      entries: 0,
      joined: new Date()
    }
  ]
};

app.get('/', (req, res) => {
  res.json(database.users);
});

app.post('/login', (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('Success');
  } else {
    res.json('Error');
  }
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  database.users.push({
    id: '4',
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.json('user not found');
  }
});

app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.json('user not found');
  }
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});

/* 

/              - GET - this is working
/login         - POST - succes/faill
/register      - POST - new user object
/profile/:id   - GET - user object
/image         - PUT - user object


*/
