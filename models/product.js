// const products = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = data => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return data([]);
        }
        else {
            data(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    // constructor(model, imgurl,desc, price) {
    //     //any random name can ne given to the arg
    //     //    here the title is the name of the field and model is the argument
    //     this.title = model;
    //     this.description = desc;
    //     this.imageurl = imgurl;
    //     this.price = price;
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        // products.push(this);
        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updated_product = [...products];
                updated_product[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updated_product), (err) => {
                    console.log("Error message: ", err);
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log("Error message: ", err);
                });
            }
        });
        // fs.readFile(p, (err, fileContent) => {});
    }

    static deleteByid(id) {
        getProductsFromFile(products => {
            const updated_product = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updated_product), err => {
                if (!err) {
                    console.log("delete item error: ", err);
                }
            });
        });
    }

    static fetchAll(data) {
        // return products;
        getProductsFromFile(data);
    }

    static findbyid(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}