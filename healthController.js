const express = require('express');
const healthController = express()

healthController.get("/", (req, res) => {
    res.send("healthy")
})

module.exports = healthController