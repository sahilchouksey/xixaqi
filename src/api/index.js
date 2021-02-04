const express = require('express');

const rdata = require('./rdata');
const ranking = require('./ranking');
const search = require('./search');
const geo = require('./geo');
const city = require('./city');
const obsJson = require('./obsJson');
const weatherData = require('./weatherData');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/rdata', rdata);
router.use('/ranking', ranking);
router.use('/search', search);
router.use('/geo', geo);
router.use('/city', city);
router.use('/obs-json', obsJson);
router.use('/weather-data', weatherData);

module.exports = router;
