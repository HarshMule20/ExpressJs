const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const productCont = require('../controllers/products')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productCont.addproducts);

// /admin/add-product => POST
router.post('/add-product', productCont.postaddproducts);

module.exports = router;
