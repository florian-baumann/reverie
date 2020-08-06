const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const events = require('./db/events.json')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const getActualRequestDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9; //  convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};


let demoLogger = (req, res, next) => { //middleware function https://codesource.io/creating-a-logging-middleware-in-expressjs/
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
  let log = `[${formatted_date}] ${method}:${url} ${status} ${durationInMilliseconds.toLocaleString()} ms`;
  console.log(log);
  fs.appendFile("request_logs.txt", log + "\n", err => {
    if (err) {
      console.log(err);
    }
  });
  next();
};
app.use(demoLogger);

app.get('/hi', (req, res) => {
  res.json({
    message: 'Welcome to the API. bitch'
  })
})

app.get('/dashboard', verifyToken, (req, res) => {
  jwt.verify(req.token, 'the_secret_key', err => {
    if (err) {
      res.sendStatus(401)
    } else {
      res.json({
        events: events
      })
    }
  })
})

app.post('/register', (req, res) => {
  if (req.body) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      // In a production app, you'll want to encrypt the password
    }

    const data = JSON.stringify(user, null, 2)
    var dbUserEmail = require('./db/user.json').email

    if (dbUserEmail === req.body.email) {
      res.sendStatus(400)
    } else {
      fs.writeFile('./db/user.json', data, err => {
        if (err) {
          console.log(err + data)
        } else {
          const token = jwt.sign({ user }, 'the_secret_key')
          // In a production app, you'll want the secret key to be an environment variable
          res.json({
            token,
            email: user.email,
            name: user.name
          })
        }
      })
    }
  } else {
    res.sendStatus(400)
  }
})

app.post('/login', (req, res) => {
  const userDB = fs.readFileSync('./db/user.json')
  const userInfo = JSON.parse(userDB)
  if (
    req.body &&
    req.body.email === userInfo.email &&
    req.body.password === userInfo.password
  ) {
    const token = jwt.sign({ userInfo }, 'the_secret_key')
    // In a production app, you'll want the secret key to be an environment variable
    res.json({
      token,
      email: userInfo.email,
      name: userInfo.name
    })
  } else {
    res.sendStatus(400)
  }
})

// MIDDLEWARE
function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}

app.listen(3000, () => {
  console.log('Server started on port 3000')
})