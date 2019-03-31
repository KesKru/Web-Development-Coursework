const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

app.use(bodyParser.json());
app.use(cors());

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'admin',
    database: 'smart-brain'
  }
});

app.get('/', (req, res) => {
  res.json(database.users);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.select('email', 'hash')
    .where('email', '=', email)
    .from('login')
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => {
            res.status(400).json('Unable to get user');
          });
      } else {
        res.status(400).json('Wrong credentials');
      }
    })
    .catch((err) => {
      res.status(400).json('Wrong credentials');
    });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  db.transaction((trx) => {
    trx('login')
      .insert({
        hash: hash,
        email: email
      })
      .returning('email')
      .then((email) => {
        return trx('users')
          .insert({
            name: name,
            email: email[0],
            entries: 0,
            joined: new Date()
          })
          .returning('*')
          .then((user) => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => {
    res.status(400).json('unable to join');
  });
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  db.select('*')
    .from('users')
    .where({ id: id })
    .then((user) => {
      if (user.lenght) {
        res.json(user[0]);
      } else {
        res.status(400).json('Error getting user');
      }
    })
    .catch((err) => {
      res.status(400).json('Not found');
    });
});

app.put('/image', (req, res) => {
  const { id } = req.body;
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => {
      res.status(400).json('Unable to get entries');
    });
});

app.listen(4000, () => {
  console.log('App is running on port 4000');
});

/* 
/              - GET - this is working
/login         - POST - succes/faill
/register      - POST - new user object
/profile/:id   - GET - user object
/image         - PUT - user object
*/
