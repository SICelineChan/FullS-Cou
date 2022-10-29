const express = require("express");
const travelplaces = require("./baseInfo.json");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // res.send(`Listening to port ${port} and beyond`);
  // console.log("Listening now on port ${port}");
  // for (let i = 0; i < travelplaces.length; i++) {
  //   console.log(travelplaces[0].city);
  // }
  const templateData = {
    countries: travelplaces,
  };
  res.render("main", templateData);
});

app.get("/info", function (req, res) {
  const indicia = req.query.indicia || 1;

  console.log(indicia);

  const templateData = {
    countries: travelplaces[indicia],
  };
  res.render("info", templateData);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
