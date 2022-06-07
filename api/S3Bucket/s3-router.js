const router = require("express").Router();
const { generateUploadUrl } = require("./s3");
const { restricted } = require("../plants/plants-middleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", restricted, async (req, res, next) => {
  try {
    const url = await generateUploadUrl();
    res.send({ url });
  } catch (err) {
    next(err);
  }
});

router.post("/", upload.single("avatar"), (req, res) => {});

module.exports = router;
