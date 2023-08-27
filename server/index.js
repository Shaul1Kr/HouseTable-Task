const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const houseRoutes = require("./routes/house");

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
const env = process.env;
const PORT = env.PORT;
const sequelize = new Sequelize(env.DATABASE, env.USER, env.PASSWORD, {
  host: env.HOST,
  dialect: env.DIALECT,
});
const connectToPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToPostgres();
module.exports = { sequelize };

app.use("/api", houseRoutes);

//Init db table
/*const house = require("./models/House");
house.sync({ force: true });*/

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
