const express = require('express');
const mongoose = require('mongoose');
const organizationRoutes = require('./routes/Oroute');
const personalDetailsRoutes = require('./routes/Proute');
const verifyToken = require('./auth');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

// mongo connection
mongoose.connect('mongodb://localhost:27017/auxilo', {
});

app.use(express.json());
// Organization Details Routes 
app.use('/api/organization',organizationRoutes);
// Personal Details Routes
app.use('/api/personal-details', personalDetailsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
