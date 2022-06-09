const router = require("express").Router();
const { uploadFile } = require("./s3");
const { restricted } = require("../plants/plants-middleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// left off trying to upload an image to the backend before sending it to the s3 bucket

router.get("/images/:key", restricted, async (req, res, next) => {
  try {
    const key = req.params.key;
  } catch (err) {
    next(err);
  }
});

router.post("/", upload.single("Image"), async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);
    const result = await uploadFile(file);
    console.log(result);
    res.send({ imagePath: `/images/${result.Key}` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
