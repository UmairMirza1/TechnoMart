const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
// for the CORS policy 
app.use(
  cors({
    origin: "*",
  })
);
connectDB();

// Let express know you are passing json

app.use(express.json({ extended: false, limit: "50mb" }));

//test
app.get("/api/", (req, res) => {
  res.send("Hello");
});

//route the requests of products
app.use("/api/product", require("./routes/api/product"));

//route requests of users
app.use("/api/user", require("./routes/api/user"))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
