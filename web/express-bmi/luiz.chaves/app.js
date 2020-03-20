const express = require("express");
const bmi = require("./bmi");
const app = express();
const port = 3000;

app.get("/bmi", (req, res) => {
  const result = {
    weight: req.query.weight,
    height: req.query.height,
    bmi: bmi(req.query.weight, req.query.height)
  };
  res.json(result);
});

app.get("/bmi/:weight/:height", (req, res) => {
  const result = {
    weight: req.params.weight,
    height: req.params.height,
    bmi: bmi(req.params.weight, req.params.height)
  };
  res.json(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
