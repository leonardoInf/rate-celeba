const fileOps = require("./fileOps");
const getImage = require("./logic");
const setup = require("./setup");

const app = setup.app;

app.get("/img", (req, res) => {
  const title = getImage();
  res.send({
    title: title,
    src: `http://${setup.HOST}:${setup.PORT}/${title}.png`,
  });
});

app.post("/img", (req, res) => {
  const name = req.body.name;
  const rating = req.body.rating;

  if (rating === 0) {
    fileOps.deleteImage(name);
  } else if (rating >= 1 && rating <= 9) {
    fileOps.updateRating();
  }
  res.end();
});

app.listen(setup.PORT, "0.0.0.0", () => {
  setup.init();
});
