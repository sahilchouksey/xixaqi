const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/*', async (req, res) => {
  try {
    const { id } = req.query;
    const BASE_URL = `https://api.waqi.info/api/feed/@${id}/obs.en.json`;

    // make a request to aqi api
    const { data } = await axios(BASE_URL);
    // respond to this request with data
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
