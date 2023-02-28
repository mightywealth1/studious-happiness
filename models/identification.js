const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const identificationSchema = new Schema({
  idtype: {
    type: String,
    required: true,
  },
  driverlicense: {
    type: String,
    required: true,
  },
  driverexpirydate: {
    type: Date,
    required: true,
  },
  driverissuedate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Identification", identificationSchema);
