const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/database");
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');


dotenv.config();

connectDB(); // for connecting with our database
const app = express();

// As we need JSON data to be sent to client
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://digital-invoice-react-app.s3-website.eu-north-1.amazonaws.com',
      'http://localhost:3000'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.get('/', (req,res)=>{
    res.json({message: "API running..."});
})

// Routes
app.use('/api/products',productRoutes);
app.use('/api/services',serviceRoutes);



const PORT = process.env.PORT || 5000;
try {
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
} catch (error) {
    console.error("Could not connect to the server because : "+ error.message);
}
