require("dotenv").config();
const express = require("express");
const router = require("./routes/router");

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, function (req, res) {
  console.log(`Have a listen on port ${port}`);
});
