const fs = require("fs");

// MDN
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const containsImage = (name) => fs.existsSync(`celeba/${name}.png`);

function selectRandomImage() {
  let filename = "";
  while (!containsImage(filename)) {
    filename = (getRandomInt(202600) + 1).toString();
    while (filename.length < 6) filename = "0" + filename;
  }
  return filename;
}

module.exports = selectRandomImage;
