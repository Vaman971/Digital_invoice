const express = require('express');
const router = express.Router();

const {getAllServices, getAllServicesById} = require('../controller/serviceController')

//@desc   GET all products from database
//@route  GET /api/products
//@access Public
router.get('/', getAllServices);


//@desc   GET a product by id from database
//@route  GET /api/products/:id
//@access Public
router.get('/:id',getAllServicesById);

module.exports = router;