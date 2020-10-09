const express = require("express");
const flagsController = require("../controllers/flagsController")

const routes = express.Router();


routes.get("/", (req, res) => {
    res.redirect('/flags/index')
})

routes.get("/flags/index", flagsController.index)

routes.get("/flags", flagsController.readAll)

module.exports = routes;