const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Root Route",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
