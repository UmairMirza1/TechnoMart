const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order: {},
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
