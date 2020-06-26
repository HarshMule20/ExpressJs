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
        if (err){
            return data([]);
        }
        else {
            data(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(model) {       //any random name can ne given to the arg
        this.title = model;
    }

    save() {
        // products.push(this);
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log("Error message: ", err);
            }); 
        });
        // fs.readFile(p, (err, fileContent) => {});
    }

    static fetchAll(data) {
        // return products;
        getProductsFromFile(data);
    }
}