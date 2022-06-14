const router = require("express").Router();
const { uploadFile, getFileStream } = require("./s3");
const { restricted } = require("../plants/plants-middleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

// left off trying to upload an image to the backend before sending it to the s3 bucket

router.get("/:key", async (req, res, next) => {
  try {
    const key = req.params.key;
    console.log(key);
    const readStream = getFileStream(key);
    (await readStream).pipe(res);
  } catch (err) {
    next(err);
  }
});

router.post("/", upload.single("Image"), async (req, res, next) => {
  try {
    const file = req.file;
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    res.send({ imagePath: `/api/images/${result.Key}` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
