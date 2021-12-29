//Import the mongoose module
var mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://anhTuan:2632001@cluster0.9c3d5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully!")
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = {connect};
