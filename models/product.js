const products = [];

module.exports = class Product {
    constructor(model) {       //any random name can ne given to the arg
        this.title = model;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}