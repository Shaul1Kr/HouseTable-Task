const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const houseRoutes = require("./routes/house");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
const env = process.env;
const PORT = env.PORT;

app.use("/api", houseRoutes);

//Init db table
/*const house = require("./models/House");
house.sync({ force: true });*/

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
