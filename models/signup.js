const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  accountnumber: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Signupuser", userSchema);
