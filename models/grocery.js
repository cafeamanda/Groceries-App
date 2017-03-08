var restful = require('node-restful');
var mongoose = restful.mongoose;

var grocerySchema = new mongoose.Schema({
  name: String
});

module.exports = restful.model('Groceries', grocerySchema);
