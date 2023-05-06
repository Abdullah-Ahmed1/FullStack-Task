const mongoose = require("mongoose");
var saleSchema = new mongoose.Schema({
  products: {
    type: [
      {
        item:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type:Number,
            default: 1
        }
      },
    ],
  },
  createAt :{
    type:Date,
    default : new Date()
  }
});
mongoose.model("Sale", saleSchema);
