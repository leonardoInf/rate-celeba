const fs = require("fs");

exports.log = function (msg) {
  fs.appendFile(
    "celeba.log",
    `${new Date().toLocaleDateString()} ${msg}\n`,
    (err) => {
      if (err) throw err;
    }
  );
};
