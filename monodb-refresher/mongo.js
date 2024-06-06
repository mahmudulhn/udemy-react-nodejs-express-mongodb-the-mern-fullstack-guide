const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('products_test');

        const result = db.collection('products').insertOne(newProduct);

        // client.close();
    } catch (error) {
        return res.json({ message: 'Could not store data' });
    }


    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client = await MongoClient.connect(url);
    const db = client.db('products_test');
    let products
    try {
        products = await db.collection('products').find().toArray();

    } catch (error) {
        return res.json({ message: 'Could not get data' });

    }

    return res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;