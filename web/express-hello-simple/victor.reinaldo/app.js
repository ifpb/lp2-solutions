const express = require("express");

const port = 3000;
const app = express();

// Define a função que deve ser rodada no caso de receber um GET no caminho "/"
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Faz o express escutar os requests na porta definida (constante "port")
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})