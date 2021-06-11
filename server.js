const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.get("/api/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
