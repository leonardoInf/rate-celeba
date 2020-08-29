const fs = require("fs");
const log = require("./logger");

exports.saveRating = function (body, data) {
  var json = JSON.parse(data);
  json.push(body);
  fs.writeFile("ratings.json", JSON.stringify(json), (err) => {
    if (err) throw err;
    log(`Saved rating for ${body.name}`);
  });
};

exports.moveImage = function (name) {
  fs.rename(`celeba/${name}.png`, `rated/${name}.png`, (err) => {
    if (err) throw err;
  });
  log(`Moved ${name} to rated`);
};

exports.deleteImage = function (name) {
  fs.unlink(`celeba/${name}.png`, (err) => {
    if (err) throw err;
  });
  log(`Deleted ${name}`);
};

exports.celebaExists = () => fs.existsSync("celeba");
exports.ratingsExist = () => fs.existsSync("ratings.json");

exports.createEmptyRatingsFile = function () {
  fs.writeFileSync("ratings.json", "[]");
  log("Created empty ratings.json file");
};

exports.updateRating = function (body) {
  fs.readFile("ratings.json", function (err, data) {
    if (err) throw err;
    saveRating(body, data);
    moveImage(name);
  });
};
