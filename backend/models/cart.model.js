const mongoose = require("mongoose");
var cartSchema = new mongoose.Schema({
  items: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
});
mongoose.model("Cart", cartSchema);
