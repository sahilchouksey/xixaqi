const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/*', async (req, res) => {
  try {
    const { id } = req.query;
    const BASE_URL = `http://api.waqi.info/feed/${id}/?`;

    const params = new URLSearchParams({
      token: process.env.API_KEY
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
