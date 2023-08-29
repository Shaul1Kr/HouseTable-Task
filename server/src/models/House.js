const { DataTypes } = require("sequelize");

const init = (sequelize) => {
  sequelize.define("House", {
    address: DataTypes.STRING,
    currentValue: DataTypes.FLOAT,
    loanAmount: DataTypes.FLOAT,
    risk: DataTypes.FLOAT,
  });
};

const calculateRisk = (house) => {
  house.risk = house.loanAmount / house.currentValue;
  if (house.loanAmount > 0.5 * house.currentValue) {
    house.risk += 0.1;
  }
  house.risk = Math.min(Math.max(house.risk, 0), 1);
};

const hooks = (sequelize) => {
  const { House } = sequelize.models;
  House.beforeCreate(calculateRisk);
  House.beforeUpdate(calculateRisk);
};

module.exports = { init, hooks };
