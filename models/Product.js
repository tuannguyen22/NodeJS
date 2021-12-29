var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

const Product = new Schema({
  name: String,
  price: Number,
  image: Image,
  discount: Number,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default:Date.now},
});

module.exports= mongoose.model('Product', Product);