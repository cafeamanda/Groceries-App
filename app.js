var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/groceries_app');

var app = express();

//routes
app.use('/api', require('./routes/api'));

app.listen(8081);
