const express = require("express");
const app = express();

const port = 3001;

app.listen(port, function (req, res) {
  console.log(`Let us listen on ${port}`);
});
