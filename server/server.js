const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// using user.js
app.use(require('./routes/user.js')); //TO FIX


//Database connection
mongoose.connect('mongodb://localhost:27017/cafeCourse', (err, res) => {
    if (err)
        throw err;
    console.log('DB online');
});

app.listen(process.env.PORT, () => {
    console.log("Express server listening to port 3000")
});