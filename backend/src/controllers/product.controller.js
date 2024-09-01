
const { Product } = require('../models');
exports.get = async (req, res) => {
    try {
        cosnt products = await Product.findAll();
        res.status(200).send(products);
    }   catch (error) {
        return res.status (500).send(error.message);
    }
};

exports.insert = async (req, res) => {
    try{
        await Product.create(req);
        return res.status (200).send('Product inserted sucessfully');
    }   catch (error) {
        return res.status(500).send(error.message)
    }
};
