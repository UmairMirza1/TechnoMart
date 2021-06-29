const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      publicID: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  image: {
    publicID: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
