const express = require('express');
const { route } = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    // const url = req.url;
    // console.log(url)
    // console.log("This is another middleware function");
    res.send('<h2> Hello from the express js</h2>')
})

module.exports = router;