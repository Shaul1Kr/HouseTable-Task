const { Sequelize } = require("sequelize");
const House = require("./House");

const { DATABASE, USER, PASSWORD, HOST, DIALECT } = process.env;
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

//Init the db table and hooks
House.init(sequelize);
House.hooks(sequelize);

//Chacking the sequilize connaction
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
