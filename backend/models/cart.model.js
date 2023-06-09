const mongoose = require("mongoose");
var cartSchema = new mongoose.Schema({
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
});
mongoose.model("Cart", cartSchema);
