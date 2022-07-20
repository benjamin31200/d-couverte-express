const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});