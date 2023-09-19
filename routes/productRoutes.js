const express = require('express');
const router = express.Router();

const {getAllProducts, getAllProductsById} = require('../controller/productController')

//@desc   GET all products from database
//@route  GET /api/products
//@access Public
router.get('/', getAllProducts);


//@desc   GET a product by id from database
//@route  GET /api/products/:id
//@access Public
router.get('/:id',getAllProductsById);

module.exports = router;