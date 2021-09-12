const mongo = require("mongoose");

const Schema = mongo.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  login: String,
  password: String,
  coffeeId: [{
    type: mongo.Schema.Types.ObjectId,
    ref: "Coffee",
  }],
});

const User = mongo.model("User", userSchema);

module.exports = User;
