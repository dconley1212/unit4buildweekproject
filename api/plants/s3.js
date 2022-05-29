const aws = require("aws-sdk");

//I left off needing to download the crypto package to encrypt the imageName

const region = "us-west-2";
const bucketName = "water-plants-app-plant-images";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});

async function generateUploadUrl() {
  const imageName = "random image name";

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };
  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}

module.exports = { generateUploadUrl };
