const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getImage = require("./logic");

const app = express();

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://10.42.0.1:3000",
    "http://10.42.0.1:5000",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static("celeba"));

app.get("/img", (req, res) => {
  const title = getImage();
  res.send({
    title: title,
    src: `http://10.42.0.1:3010/${title}.png`,
  });
});

function saveRating(body, data) {
  var json = JSON.parse(data);
  json.push(body);
  fs.writeFile("ratings.json", JSON.stringify(json), (err) => {
    if (err) throw err;
  });
}

function moveImage(name) {
  fs.rename(`celeba/${name}.png`, `rated/${name}.png`, (err) => {
    if (err) throw err;
  });
}

async function deleteImage(name) {
  fs.unlink(`celeba/${name}.png`, (err) => {
    if (err) throw err;
  });
}

app.post("/img", (req, res) => {
  const name = req.body.name;
  const rating = req.body.rating;

  if (rating === 0) {
    deleteImage(name);
  } else if (rating >= 1 && rating <= 9) {
    fs.readFile("ratings.json", function (err, data) {
      saveRating(req.body, data);
      moveImage(name);
    });
  }
  res.end();
});

app.listen(3010, "0.0.0.0", () => {
  console.log("Listening at http://0.0.0.0:3010");
});
