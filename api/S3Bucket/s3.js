const dotenv = require("dotenv");
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const crypto = require("crypto");
const { promisify } = require("util");

const randomBytes = promisify(crypto.randomBytes);

//I left off needing to download the crypto package to encrypt the imageName

dotenv.config();

const region = process.env.AWS_BUCKET_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

async function uploadFile(file) {
  // const rawBytes = randomBytes(16);
  // const imageName = rawBytes.toString("hex");
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(params).promise();
}

module.exports = { uploadFile };
