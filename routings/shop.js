const express = require('express');
const path = require('path')

const router = express.Router();


router.get('/', (req, res, next) => {
    // const url = req.url;
    // console.log(url)
    // console.log("This is another middleware function");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;