const express = require("express");
const flagsController = require("../controllers/index")

const routes = express.Router();


routes.get("/", (req, res) => {
    res.redirect('/flags/index')
})

routes.get("/flags/index", flagsController.index)

routes.get("/flags", flagsController.readFlags)

module.exports = routes;