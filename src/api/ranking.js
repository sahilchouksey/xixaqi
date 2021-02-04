const express = require('express');
const axios = require('axios');

const router = express.Router();

const BASE_URL = 'https://waqi.info/rtdata/ranking/index2.json';

router.get('/', async (req, res) => {
  try {
    // make a request to aqi api
    const { data } = await axios(BASE_URL);

    // respond to this request with data
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
