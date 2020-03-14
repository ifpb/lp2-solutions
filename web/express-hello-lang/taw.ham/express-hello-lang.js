const express = require("express");
const app = express();
const port = 3000;
app.get("/hello/pt", (require, response) => {
    res.send(`Olá mundo!`)
})
app.get("/hello/en", (require, response) => {
    response.send("Hello world");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));