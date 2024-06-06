const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect(
    'mongodb://127.0.0.1:27017/products_test'
).then(() => {
    console.log('CONNECTED');
}).catch(() => {
    console.log('FAILED');
});

const createProduct = async (req, res, next) => {
    const createProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    });

    const result = await createProduct.save();

    res.json(result);
};


const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;