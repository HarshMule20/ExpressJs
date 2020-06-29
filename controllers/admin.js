const Product = require('../models/product');


exports.getaddproducts = (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.postaddproducts = (req, res, next) => {
  // products.push({ title: req.body.title });
//   const product = new Product(req.body.title);
const title = req.body.title;
const imageUrl = req.body.imageUrl;
const description = req.body.description;
const price = req.body.price;
const product = new Product(null, title, imageUrl, description, price);
  product.save();
  return res.redirect('/');
};

exports.geteditproducts = (req, res, next) => {
  const editmode = req.query.edit;
  if(!editmode) {
    res.redirect('/');
  }
  const prodID = req.params.productId;
  Product.findbyid(prodID, product => {
    if(!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/edit-product',
      editing: editmode,
      product: product
    });
  });
  
};

exports.posteditproduct = (req, res, next) => {
  const prod_id = req.body.productId;
  const updatedtitle = req.body.title;
  const updatedprice = req.body.price;
  const updatedimageUrl = req.body.imageUrl;
  const updateddescription =req.body.description;
  const updated_product = new Product(prod_id, updatedtitle, updatedimageUrl, updateddescription, updatedprice);
  updated_product.save();
  return res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: '/admin/products'
        });
      });
}