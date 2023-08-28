const express = require("express");
const house = require("./house.js");
const router = express.Router();

router.use("/house", house);

module.exports = router;
