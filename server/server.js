const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// database connection
mongoose.connect(process.env.DB_LOCAL_URL).then(() => {
    console.log(`Database is connected.`);
});

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
});