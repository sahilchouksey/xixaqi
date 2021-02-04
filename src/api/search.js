const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/*', async (req, res) => {
  try {
    const keyword = req.url.split('query=')[1];
    const BASE_URL = 'https://api.waqi.info/search/?';

    const params = new URLSearchParams({
      token: process.env.API_KEY,
      keyword
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
