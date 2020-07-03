const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);


module.exports = class Cart {
    static addProductToCart(id, product_price) {
        // fetch, add cart 
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            // existing products
            const existingProdIndex = cart.products.findIndex(
                prod => prod.id === id
            );
            const existingProd = cart.products[existingProdIndex];
            let updated_product;
            if (existingProd) {
                updated_product = { ...existingProd };
                updated_product.qty = updated_product.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProdIndex] = updated_product;
            }
            else {
                updated_product = { id: id, qty: 1 };
                cart.products = [...cart.products, updated_product];
            }
            cart.totalPrice = cart.totalPrice + +product_price;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log("This is and error: ", err)
            });
        });
    }

    static deleteProduct(id, product_price) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return;
            }
            const updatecart = {...fileContent };
            const product = updatecart.products.find(prod => prod.id === id);
            const productquantity = product.qty;
            updatecart.products = updatecart.products.filter(
                prod => prod.id !== id
            );
            updatecart.totalPrice = fileContent.totalPrice - product_price * productquantity;

            fs.writeFile(p, JSON.stringify(updatecart), err => {
                console.log("This is and error: ", err)
            });
        })
    }
};