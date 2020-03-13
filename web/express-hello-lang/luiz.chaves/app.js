const express = require("express");
const app = express();
const port = 3000;

app.get("/hello/pt", (req, res) => {
  res.send(`Olá mundo!`);
});

app.get("/hello/en", (req, res) => {
  res.send(`Hello world!`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
