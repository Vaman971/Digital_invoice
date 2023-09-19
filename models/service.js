const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    }
})

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;