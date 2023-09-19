// This file will append all the data to our database.
const dotenv = require('dotenv');

dotenv.config();

const productData = require('./data/products');
const Product = require('./models/product');

const serviceData = require('./data/services');
const Service = require('./models/service');

const connetDB = require('./config/database');


connetDB();
const importData = async () =>{
    try{
        await Product.deleteMany({});
        await Service.deleteMany({});

        await Product.insertMany(productData);
        await Service.insertMany(serviceData);

        console.log("Data Imported Successfully");
        process.exit();
    } catch(error){
        console.error("Error with data import");
        process.exit(1);
    }
}
importData();