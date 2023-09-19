// This file will be responsible for fetching data. 
const Product = require('../models/product');

const getAllProducts = async (req,res) =>{
    try {
        const products = await Product.find({});

        // our frontend will make request to this end point and we'll recieve all the product
        res.json(products);
    } catch (error) {
        console.error("Error fetching data because "+error.message);
        res.status(500).json({message: "Server Error"});
    }
};

const getAllProductsById = async(req,res) =>{
    try {
        // console.log(req.params.id);
        const product = await Product.findById(req.params.id);

        // our frontend will make request to this end point and we'll recieve all the product
        res.json(product);
    } catch (error) {
        console.error("Error fetching data because "+ error.message);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllProducts, 
    getAllProductsById
};