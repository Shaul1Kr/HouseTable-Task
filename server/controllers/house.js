const House = require("../models/House");

const createHouse = async (req, res) => {
  try {
    const { address, curVal } = req.body;
    const newHouse = await House.create({
      address,
      currentValue: curVal,
    });
    res.status(201).json(newHouse.id);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getHouseDetail = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const houseDetail = await House.findByPk(id);
    res.status(201).json(houseDetail.dataValues);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updateHouseRec = async (req, res) => {
  try {
    console.log(req.params, req.body);
    const { id } = req.params;
    const { address, curVal } = req.body;
    const updateDetail = await House.update(
      { address, currentValue: curVal },
      { where: { id } }
    );
    const houseDetail = await House.findByPk(id);
    res.status(201).json(houseDetail.dataValues);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { createHouse, getHouseDetail, updateHouseRec };
