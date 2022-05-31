const router = require("express").Router();
const { generateUploadUrl } = require("./s3");
const { restricted } = require("../plants/plants-middleware");

router.get("/", restricted, async (req, res, next) => {
  try {
    const url = await generateUploadUrl();
    res.send({ url });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
