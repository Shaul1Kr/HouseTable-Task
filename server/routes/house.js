const express = require("express");
const {
  createHouse,
  getHouseDetail,
  updateHouseRec,
} = require("../controllers/house.js");

const router = express.Router();

router.post("/houses", createHouse);
router.get("/houses/:id", getHouseDetail);
router.put("/houses/:id", updateHouseRec);

module.exports = router;
