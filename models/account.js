const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  phonenumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Account", accountSchema);
