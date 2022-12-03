const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
   
    email: String
    

  });
  
  const Order = mongoose.model("order", orderSchema);
  
  module.exports = Order;