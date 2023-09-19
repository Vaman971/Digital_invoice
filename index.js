const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./config/database");
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const cors = require('cors');
const path=require('path');
dotenv.config();

// As we need JSON data to be sent to client
app.use(express.json());
app.use(cors());

connectDB(); // for connecting with our database

//Serving static files
app.use(express.static(path.join(__dirname,"/client/build")))

app.get('/', (req,res)=>{
    res.json({ message: "Api running successfully"});
})

// Routes
app.use('/api/products',productRoutes);
app.use('/api/services',serviceRoutes);


const PORT = process.env.PORT || 8000;
try {
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
} catch (error) {
    console.error("Could not connect to the server because : "+ error.message);
}
