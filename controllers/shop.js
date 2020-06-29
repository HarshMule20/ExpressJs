const Product = require('../models/product');
const router = require('../routes/shop');
const Cart = require('../models/cart');

exports.getproducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product_list', {
      prods: products,
      pageTitle: 'All products Shop',
      path: '/products',
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true
    });
  });
};

exports.getOneProduct = (req, res, next) => {
  const product_id = req.params.pro_id;
  // console.log("the product id: ", product_id);
  Product.findbyid(product_id, product => {
    // console.log("the product: ", product.title)
    res.render('shop/product_details', {
      product: product,
      pageTitle: product.title,
      path: '/products',
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true
    });
  })
}

exports.getindex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path : '/cart',
    pageTitle : 'Your Cart'
  });
};

exports.addToCart = (req, res, next) => {
  const prod_id = req.body.productId;
  // console.log(prod_id);
  Product.findbyid(prod_id, product => {
    Cart.addProductToCart(prod_id, product.price);
  });
  res.redirect('/cart');

}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path : '/orders',
    pageTitle : 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle : 'Checkout',
    path : 'checkout'
  });
}