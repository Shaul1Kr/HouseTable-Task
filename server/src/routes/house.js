const express = require("express");
const {
  createHouse,
  getHouseDetail,
  updateHouseRec,
  getAllHouses,
} = require("../controllers/house.js");

const router = express.Router();

router.post("/", createHouse);
router.get("/", getAllHouses);
router.get("/:id", getHouseDetail);
router.put("/:id", updateHouseRec);

module.exports = router;
