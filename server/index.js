require('dotenv').config()
const express = require('express')
const db = require('../database')
const { checkUser, checkEmail, addUser, loginUser, getAllUsers, getUser, addMeasurements, getMeasurements, getAllMeasurements } = require('../database/controllers/queries.js')
const path = require('path')
const axios = require('axios')
const app = express()

// Setup Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/userinfo', (req, res) => {
  if (req.query.username) {
    getUser(req.query.username).then((data) => {
      res.status(201).send(data[0])
    }).catch((err) => {
      res.status(404).send(err)
    })
  } else {
    res.send('Invalid Username')
  }
})

app.get('/username', (req, res) => {
  if (req.query.username) {
    getUser(req.query.username).then((data) => {
      if (data.length === 0) {
        res.status(201).send(false)
      } else {
        res.status(201).send(true)
      }
    }).catch((err) => {
      res.status(404).send(err)
    })
  } else {
    res.send('Invalid Username')
  }
})

app.get('/email', (req, res) => {
  if (req.query.email) {
    checkEmail(req.query.email).then((data) => {
      if (data.length === 0) {
        res.status(201).send(false)
      } else {
        res.status(201).send(true)
      }
    }).catch((err) => {
      res.status(404).send(err)
    })
  } else {
    res.send('Invalid Email')
  }
})

app.post('/newuser', (req, res) => {
  if (req.body) {
    addUser(req.body).then((data) => {
      res.status(201).send('Account Created')
    }).catch((err) => {
      res.status(404).send(err)
    })
  } else {
    res.send('Error creating account')
  }
})

app.post('/measurements', (req, res) => {
  if (req.body) {
    addMeasurements(req.body).then((data) => {
      res.status(201).send('Measurements Added')
    }).catch((err) => {
      res.status(404).send(err)
    })
  } else {
    res.send('Error adding measurments')
  }
})

app.get('/measurements', (req, res) => {
  if (req.query.username) {
    getMeasurements(req.body).then((data) => {
      res.status(201).send(data)
    }).catch((err) => {
      res.status(404).send(err)
    })
  } else {
    res.send('Error creating account')
  }
})
app.get('/allusers', (req, res) => {
  getAllUsers().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send(err)
  })
})

app.get('/allmeasurements', (req, res) => {
  getAllMeasurements().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send(err)
  })
})

app.get('/login', (req, res) => {
  if (req.query.username && req.query.password) {
    loginUser(req.query.username, req.query.password).then((data) => {
      if (data.length !== 0) {
        res.status(201).send(true)
      } else {
        res.status(201).send(false)
      }
    }).catch((err) => {
      console.log(err)
      res.status(404).send(err)
    })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server listening at http://localhost:${PORT}`)
