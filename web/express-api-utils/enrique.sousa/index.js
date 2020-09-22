const express = require("express");
const cors = require("cors")
const Routes = require("./routes");
const api = express();
api.use(cors())
api.use(express.json())
api.use(Routes)
api.listen(3000, () => console.log("Server Rodando na porta 3000"))