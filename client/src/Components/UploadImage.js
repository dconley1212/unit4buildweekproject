import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    axiosWithAuth()
      .get("/s3url")
      .then((res) => {
        setUrl(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const userFile = new FormData();
    userFile.append("File", file);

    console.log(url);
    console.log(userFile);

    axios
      .put(url, userFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {image === null ? (
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFile} accept="image/*"></input>
          <button>Upload</button>
        </form>
      ) : (
        <img src={image} alt="plants"></img>
      )}
    </>
  );
};

export default UploadImage;
