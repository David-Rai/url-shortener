const express = require("express");
require("dotenv").config();
const router = require("./route/urlShort");
const cors = require("cors");

const app = express();

// Apply CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 1111;
app.listen(port, () => console.log(`Server is live on port ${port}...`));
