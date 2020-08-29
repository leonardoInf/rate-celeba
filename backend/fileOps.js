const fs = require("fs");

exports.saveRating = function(body, data) {
    var json = JSON.parse(data);
    json.push(body);
    fs.writeFile("ratings.json", JSON.stringify(json), (err) => {
      if (err) throw err;
    });
  }
  
exports.moveImage = function(name) {
    fs.rename(`celeba/${name}.png`, `rated/${name}.png`, (err) => {
      if (err) throw err;
    });
  }
  
exports.deleteImage = function(name) {
    fs.unlink(`celeba/${name}.png`, (err) => {
      if (err) throw err;
    });
  }

exports.celebaExists = function(){
    return fs.existsSync("celeba");
}

exports.updateRating = function(body){
  fs.readFile("ratings.json", function (err, data) {
    if(err) throw err;
    saveRating(body, data);
    moveImage(name);
  });
}