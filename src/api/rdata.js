// const express = require('express');
// const axios = require('axios');

// const router = express.Router();

// router.get('/*', async(req, res) => {
//     try {
//         const code = req.url.split('code=')[1];
//         const BASE_URL = `https://waqi.info/rtdata/ranking/${code}.json`;

//         // make a request to aqi api
//         const { data } = await axios(BASE_URL);

//         // respond to this request with data
//         res.json(data);
//     } catch (error) {
//         next(error);
//     }
// });

// module.exports = router;


const express = require('express');
const axios = require('axios');

const router = express.Router();

const cache = {};

router.get('/*', async(req, res, next) => {
    try {
        const code = req.url.split('code=')[1];
        const BASE_URL = `https://waqi.info/rtdata/ranking/${code}.json`;
        const current = Date.now()
        if (cache.hasOwnProperty(code) && !((current - cache[code].time) > 1800000))
            return res.send(cache[code].data);

        // make a request to aqi api
        const { data } = await axios(BASE_URL);

        // respond to this request with data
        res.json(data);

        //set cache
        cache[code] = { time: Date.now(), data };

    } catch (error) {
        console.log(error)
        next(error);
    }
});

module.exports = router;