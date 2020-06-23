const express = require('express');
const path = require('path')

const router = express.Router();
const admindata = require('./admin');


router.get('/', (req, res, next) => {
    // const url = req.url;
    // console.log(url)
    // console.log("This is another middleware function");
    // console.log("In Shop Js: ", admindata.products);
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    const products = admindata.products;
    res.render('shop',{products : products, pagetitle: 'Shop', path: '/admin/shop', hasProducts: products.length > 0, actievShop: true});
});

module.exports = router;