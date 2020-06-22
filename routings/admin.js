const express = require('express');
const path = require('path')
const rootDir = require('../helper/path');
const router = express.Router();

const products = [];

// You can keep both the urls same as both the middleware are of different requests!!

router.get('/add-product', (req, res, next) => {
    // console.log("New Porfile is Adding...")
    // res.send('<h1> Add New Profile</h>')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

//This middleware (app.use) always access whether it is POST or GET request {here is the new logic mentioned for too restrict it to just POST request}, for that just change the app.use to app.post
router.post('/add-product', (req, res, next) => {
    // console.log("This is the request body: ", req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;

exports.products = products;
// Instead of adding the admin in the url in each function, we can define it once when the adminroutes is imported!!!