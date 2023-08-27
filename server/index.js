const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
