const { DataTypes } = require("sequelize");
const sequelize = require("../index").sequelize;

const House = sequelize.define("House", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING,
  },
  currentValue: {
    type: DataTypes.FLOAT,
  },
  loanAmount: {
    type: DataTypes.FLOAT,
  },
  risk: {
    type: DataTypes.FLOAT,
  },
});

module.exports = House;
