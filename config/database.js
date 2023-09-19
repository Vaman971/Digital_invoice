const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DataBase connected Successfully");
    } catch(error){
        console.error(`Failed connecting to database because ${error.message}`);
        process.exit(1); // We'll exit our server 
    }
}

module.exports = connectDB;