const express = require("express");
const healthController = express()

healthController.get("/", (req, res) => {
    res.send("ok")
})





module.exports = healthController;