const path = require('path');

const express = require('express');

const ShopController = require("../controllers/shop");

const router = express.Router();

router.get('/', ShopController.getindex);

router.get('/products', ShopController.getproducts);

router.get('/cart', ShopController.getCart);

router.get('/checkout', ShopController.getCheckout);

router.get('/orders', ShopController.getOrders);

module.exports = router;
