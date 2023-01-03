const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(express.json());
app.use(cors());

// Routes
// const productRoutes = require('./routes/v1/product.route');

app.get('/', (req, res) => {
    res.send("Route is working!")
});

// app.use('/api/v1/product', productRoutes);


module.exports = app