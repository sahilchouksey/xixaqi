//
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/*', async (req, res) => {
  try {
    const geo = req.url.split(';');
    const lat = geo[0].split('lat=')[1];
    const lng = geo[1].split('lng=')[1];

    const BASE_URL = `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&`;

    const params = new URLSearchParams({
      units: 'metric',
      appid: process.env.APP_ID
    });

    // make a request to aqi api
    const { data } = await axios(`${BASE_URL}${params}`);
    // respond to this request with data
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
