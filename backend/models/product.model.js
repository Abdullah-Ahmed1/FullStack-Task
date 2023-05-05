const mongoose = require("mongoose");
var productschema = new mongoose.Schema({
  name: {
    type: String,
  },
  price:{
    type:Number,
  },
  image: {
    type: String,
  },
  
  
});
mongoose.model("Product", productschema);