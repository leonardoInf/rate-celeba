const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fileOps = require("./fileOps");

require("dotenv").config();
exports.HOST = process.env.HOST;
exports.PORT = process.env.PORT;

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5000",
    `http://${exports.HOST}:3000`,
    `http://${exports.PORT}:5000`,
  ],
  optionsSuccessStatus: 200,
};

exports.init = function () {
  console.log(`Listening at http://0.0.0.0:${setup.PORT}`);
  if (!fileOps.celebaExists()) {
    throw "Please download the celeba align img database at: shorturl.at/jqsQR";
  }
  if (!fileOps.ratingsExist()) {
    fileOps.createEmptyRatingsFile();
  }
};

exports.app = express();
exports.app.use(cors(corsOptions));
exports.app.use(bodyParser.json());
exports.app.use(express.static("celeba"));
exports.app.use(express.static("../build"));
