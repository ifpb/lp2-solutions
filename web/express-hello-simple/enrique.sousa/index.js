const express = require("express");
const api = express();
api.get("/", (req, res) =>{
    res.send("Hello World")
})

api.listen(3000, () => console.log("Server Rodando na porta 300"))