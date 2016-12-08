require('dotenv').config();
const bodyParser = require('body-parser');
const metadata = require('../package.json');
const compression = require('compression');
const express = require('express');
const path = require('path');
const redis = require('redis');
const sharp = require('sharp');

const utils = require('./lib/utilities.js');
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');
const userController = require('../db/controllers/users.js');
const bookmarkController = require('../db/controllers/bookmarks.js');
const photoController = require('../db/controllers/photos.js');
const likeController = require('../db/controllers/likes.js');
const commentController = require('../db/controllers/comments.js');

const port = process.env.NODE_PORT;
const secret = process.env.SESSION_SECRET;
const AWSaccessKey = process.env.ACCESSKEYID;
const AWSsecretKey = process.env.SECRETACCESSKEY;

// const redisClient = redis.createClient();
const app = express();

app.use(bodyParser.json({limit: '40mb'}));
app.use(compression()); // gzip compress all responses
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true
}));

const routes = ['/'];

for (const route of routes) {
  app.get(route, (req, res) => {
    if (route === '/') {
      res.redirect('/dashboard');
    } else {
      res.sendFile(path.join(__dirname, '/../client/index.html'));
    }
  });
}

app.use(express.static(path.join(__dirname, '../client')));

// wildcard route
app.get('*', function(req, res) {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`🌎  Listening on port ${port} for app ${metadata.name} 🌏`);
});