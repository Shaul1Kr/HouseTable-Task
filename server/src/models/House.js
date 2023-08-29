const { DataTypes } = require("sequelize");

const init = (sequelize) => {
  sequelize.define("House", {
    address: DataTypes.STRING,
    currentValue: DataTypes.FLOAT,
    loanAmount: DataTypes.FLOAT,
    risk: DataTypes.FLOAT,
  });
};
//Calculate the rist of the house
const calculateRisk = (house) => {
  house.risk = house.loanAmount / house.currentValue;
  if (house.loanAmount > 0.5 * house.currentValue) {
    house.risk += 0.1;
  }
  house.risk = Math.min(Math.max(house.risk, 0), 1);
};

//Hooks for calculate the rist when create and update a house
const hooks = (sequelize) => {
  const { House } = sequelize.models;
  House.beforeCreate(calculateRisk);
  House.beforeUpdate(calculateRisk);
};

module.exports = { init, hooks };
