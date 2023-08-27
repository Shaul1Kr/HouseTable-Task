const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv").config();

const env = process.env;
const sequelize = new Sequelize(env.DATABASE, env.USER, env.PASSWORD, {
  host: env.HOST,
  dialect: env.DIALECT,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

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
