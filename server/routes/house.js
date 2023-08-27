const express = require("express");
const {
  createHouse,
  getAllHouses,
  updateHouseRec,
} = require("../controllers/house.js");

const router = express.Router();

router.post("/houses", createHouse);
router.get("/houses/:id", getAllHouses);
router.put("/houses/:id", updateHouseRec);

module.exports = router;
