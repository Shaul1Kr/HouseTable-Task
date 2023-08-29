require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./routes/api");
const pages = require("./pages");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
const PORT = process.env.PORT;

app.use("/api", api);
app.use(pages);
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
