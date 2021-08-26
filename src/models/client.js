const mongoose = require("mongoose");
require("../db/conn");
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
  },
});

const Client = new mongoose.model("Client", clientSchema);

module.exports = Client;
