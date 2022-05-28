const mongoose = require("mongoose")
const Schema = mongoose.Schema
const clubSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("club", clubSchema)