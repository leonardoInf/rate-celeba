const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
exports.HOST = process.env.HOST;
exports.PORT =  process.env.PORT;

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5000",
    `http://${exports.HOST}:3000`,
    `http://${exports.PORT}:5000`,
  ],
  optionsSuccessStatus: 200,
};

exports.app = express();
exports.app.use(cors(corsOptions));
exports.app.use(bodyParser.json());
exports.app.use(express.static("celeba"));