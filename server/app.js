const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');


// <-- Middleware -->
app.use(cors());
// Stripe webhook
app.use('/api/v1/payment/stripe/webhook', express.raw({ type: "*/*" }));
app.use(express.json());



// <-- Routes -->
const paymentRoute = require('./routes/v1/payment.route');


app.use('/api/v1/payment', paymentRoute);


app.get('/', (req, res) => {
    res.send("Route is working!")
});
app.all('*', (req, res) => {
    res.send('No Route found.')
});



// <-- Global error handler -->
app.use(errorHandler);


module.exports = app;