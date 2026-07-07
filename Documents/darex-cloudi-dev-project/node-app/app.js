 const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello students! This app is running inside Docker.");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Application is healthy"
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});