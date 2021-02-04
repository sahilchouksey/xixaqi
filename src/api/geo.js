const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/*', async(req, res) => {
    try {
        const geo = req.url.split(';');
        const lat = geo[0].split('lat=')[1];
        const lng = geo[1].split('lng=')[1];

        const BASE_URL = `https://api.waqi.info/feed/geo:${lat}; ${lng}/?`;

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