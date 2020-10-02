const express = require("express");
const app = express();

//Request, Response
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => console.log("Server Rodando na porta 3000"))  