const mongoose = require("mongoose");

const coffeeSchema = mongoose.Schema({
  image: String,
  name: String,
  volume: Number,
  description: String,
  sugar: {
    type: Number,
    required: false
  },
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

module.exports = Coffee;
