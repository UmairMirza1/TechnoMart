const mongoose = require("mongoose");

const highlightSchema = new mongoose.Schema({
  products: [{}],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Highlight = mongoose.model("highlight", highlightSchema);

module.exports = Highlight;
