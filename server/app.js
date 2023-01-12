const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');


// <-- Middleware -->
app.use(cors());
app.use('/api/v1/payment/stripe/webhook', express.raw({ type: "*/*" })); // Stripe webhook
app.use(express.json());


// <-- Routes -->
app.use('/api/v1/payment', require('./routes/v1/order.route'));
app.use('/api/v1/user', require('./routes/v1/user.route'));


app.get('/', (req, res) => {
    res.send("Route is working!")
});
app.all('*', (req, res) => {
    res.send('No Route found.')
});



// <-- Global error handler -->
app.use(errorHandler);


module.exports = app;