const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

// <-- Middleware -->
app.use(cors());
app.use('/api/v1/payment/stripe/webhook', express.raw({ type: "*/*" })); // Stripe webhook
app.use(express.json());
app.use(express.static("public"));



// <-- Routes -->
app.get('/api/v1', (req, res) => {
    res.send("Route is working!")
});

// Get passport file
app.get('/api/v1/passport-file/:fileName', (req, res) => {
    const { fileName } = req.params;
    res.sendFile(__dirname + `/public/passport_files/${fileName}`)
});

app.use('/api/v1/payment', require('./routes/v1/order.route'));
app.use('/api/v1/user', require('./routes/v1/user.route'));
app.use('/api/v1/admin', require('./routes/v1/admin.route'));


app.all('*', (req, res) => {
    res.send('No Route found.')
});


// <-- Global error handler -->
app.use(errorHandler);


module.exports = app;