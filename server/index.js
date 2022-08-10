require('dotenv').config();
const express = require('express');
const db = require('../database');
const {addUser, checkUser} = require('../database/controllers/queries.js');
const path = require('path');
const axios = require('axios');
const app = express();

// Setup Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/user', (req, res) => {
  if(req.query.username) {
    checkUser(req.query.username).then((data) => {
      if(data.length > 1) {
        data = true;
      } else {
        data = false;
      }
      res.status(201).send(data);
    })
  } else {
    res.send('Invalid Username')
  }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
