const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const AdminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', AdminController.getaddproducts);

// /admin/products => GET
router.get('/products', AdminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', AdminController.postaddproducts);

router.get('/edit-product/:productId', AdminController.geteditproducts);

router.post('/edit-product', AdminController.posteditproduct);

router.post('/delete-product', AdminController.postdeleteproduct);

module.exports = router;
