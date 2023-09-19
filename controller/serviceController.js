// This file will be responsible for fetching data. 
const Service = require('../models/service');

const getAllServices = async (req,res) =>{
    try {
        const services = await Service.find({});

        // our frontend will make request to this end point and we'll recieve all the product
        res.json(services);
    } catch (error) {
        console.error("Error fetching data because "+error.message);
        res.status(500).json({message: "Server Error"});
    }
};

const getAllServicesById = async(req,res) =>{
    try {
        const service = await Service.findById(req.params.id);

        // our frontend will make request to this end point and we'll recieve all the product
        res.json(service);
    } catch (error) {
        console.error("Error fetching data because "+error.message);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllServices, 
    getAllServicesById
};