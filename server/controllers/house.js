const House = require("../models/House");

const createHouse = async (req, res) => {
  try {
    console.log(req.body);
    const { address, curVal } = req.body;
    const newHouse = await House.create({
      address: address,
      currentValue: curVal,
    });
    res.status(201).json(newHouse.id);
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};
const getAllHouses = (req, res) => {
  try {
    console.log(req.params, req.body);
    res.status(201).json("Ok1");
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};
const updateHouseRec = (req, res) => {
  try {
    console.log(req.params);
    res.status(201).json("Ok2");
  } catch (error) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { createHouse, getAllHouses, updateHouseRec };
