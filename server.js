const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json({ extended: false, limit: "50mb" }));

app.get("/api/", (req, res) => {
  res.send("Hello");
});

app.use("/api/product", require("./routes/api/product"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
