// require('dotenv').config();
const bodyParser = require('body-parser');
const metadata = require('../package.json');
const compression = require('compression');
const express = require('express');
const path = require('path');

const port = 8080;
// const secret = process.env.SESSION_SECRET;


// const redisClient = redis.createClient();
const app = express();

app.use(bodyParser.json({limit: '40mb'}));
app.use(compression()); // gzip compress all responses

const routes = ['/', '/contact', '/portfolio', '/skills', '/', '/hackerwords', '/goolp', '/immerse', ];

for (const route of routes) {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/index.html'));
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