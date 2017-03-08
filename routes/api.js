var express = require ('express');
var app = express();
var router = express.Router();



//var Grocery = require('../models/grocery');
var List = require('../models/list');

//Grocery.methods(['get', 'post', 'put', 'delete']);
List.methods(['get', 'post', 'put', 'delete']);

//Grocery.register(router, '/lists/groceries');
List.register(router, '/lists');


module.exports = router;
