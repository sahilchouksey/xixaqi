const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
// const frontend = require('../frontend');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.get('/city/:id', (req, res) => {
  // console.log(req.query.id, encodeURIComponent);
  console.log(req.params.id);
  res.sendFile(path.resolve(__dirname, '../frontend/dist/city.html'));
});

app.use('/api/xix3r', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
