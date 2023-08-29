const { models } = require("../models");

const createHouse = async (req, res) => {
  try {
    const { address, curVal, loanAmount } = req.body;
    console.info(
      `Adding new house recored with address ${address} current value ${curVal} and loan amount ${loanAmount}`
    );
    await models.House.create({
      address,
      currentValue: curVal,
      loanAmount,
    });
    return res.redirect("/house");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error during creation house detial");
  }
};
const getHouseDetail = async (req, res) => {
  try {
    const { id } = req.params;
    console.info(`Get house detail by id ${id}`);
    const houseDetail = await models.House.findByPk(id);
    return res.status(200).json(houseDetail.dataValues);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error during getting house detial");
  }
};
const updateHouseRec = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, curVal, loanAmount } = req.body;
    console.info(
      `Update house ${id} with details address ${address} current value ${curVal} and loan amount ${loanAmount}`
    );
    await models.House.update(
      { address, currentValue: curVal, loanAmount },
      { where: { id }, individualHooks: true }
    );
    return res.status(200).send("House as updated");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error during update house");
  }
};

const getAllHouses = async (req, res) => {
  try {
    console.info(`Retrive all houses`);
    const houses = await models.House.findAll({
      order: [["createdAt", "DESC"]],
      offset: 0,
      limit: 30,
    });
    return res.status(200).json(houses);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error during retrive all houses detail");
  }
};

module.exports = { createHouse, getHouseDetail, updateHouseRec, getAllHouses };
