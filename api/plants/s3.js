const aws = require("aws-sdk");

const region = "us-west-2";
const bucketName = "water-plants-app-plant-images";
const accessKeyId = "";
const secretAccessKey = "";

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});
