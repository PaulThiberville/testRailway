const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

let count = 0;

app.get("/", (req, res) => {
  count++;
  res.send("Count: " + count);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
