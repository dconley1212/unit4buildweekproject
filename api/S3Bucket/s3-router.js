const router = require("express").Router();
const { generateUploadUrl } = require("./s3");
const { restricted } = require("../plants/plants-middleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// left off trying to upload an image to the backend before sending it to the s3 bucket

router.get("/", restricted, async (req, res, next) => {
  try {
    const url = await generateUploadUrl();
    res.send({ url });
  } catch (err) {
    next(err);
  }
});

router.post("/", upload.single("Image"), async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
