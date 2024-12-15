const express = require('express');
const path = require('path'); // For handling static files and paths
const cors = require('cors'); // To enable Cross-Origin Resource Sharing
const bodyParser = require('body-parser'); // For parsing incoming requests
const dotenv = require('dotenv'); // For environment variable management
const mongoose = require('mongoose');
const User=require('./models/userSchema');
const Mentor=require('./models/mentorSchema');
const Job = require('./models/Jobschema.js');
const University=require('./models/Universityschema.js')
const connectDB=require('./db.js');
dotenv.config(); // Load environment variables from .env file

// Define routes
const routes=require('./routes/route.js');
const payroute=require('./routes/paymentRoutes');
const loginsingup=require('./routes/loginSignupRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Default port 3000

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json()); // Parses JSON data
// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve static files (CSS, images, etc.)
app.use(express.static('public')); // This will allow Express to serve files from the public folder

// default route
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
})

// Use routes

app.use('/api', routes); // Mount routes at the `/api` endpoint
app.use('/api/payment',payroute);//routes for stripe payment
app.use('/api/users',loginsingup);//routes for general use

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
