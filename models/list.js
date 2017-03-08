var restful = require('node-restful');
var mongoose = restful.mongoose;
var Grocery = require('./grocery');

var listSchema = new mongoose.Schema({
  groceries: [Grocery]
});

module.exports = restful.model('Lists', listSchema);
