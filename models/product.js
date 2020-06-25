// const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(model) {       //any random name can ne given to the arg
        this.title = model;
    }

    save() {
        // products.push(this);
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        // return products;
        fs.readFile(p, (err, fileContent) => {
            if (err){
                return [];
            }
            return JSON.parse(fileContent);
        })
    }
}