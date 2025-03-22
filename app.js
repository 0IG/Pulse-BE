const express = require('express');
const app = express("cors");
const cors = require('cors');

app.use(cors());

const healthController = require('./controllers/healthController');

app.get("/" , (req, res) => {
    res.send("hello world :3")
})

app.use("/heartbeat", healthController);

module.exports = app