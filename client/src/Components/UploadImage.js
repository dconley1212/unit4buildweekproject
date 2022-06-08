import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const userFile = new FormData();
    userFile.append("Image", file);
    console.log(userFile);

    axiosWithAuth()
      .post("/images", userFile, {
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
          <button type="submit">Add Image</button>
        </form>
      ) : (
        <img src={image} alt="plants"></img>
      )}
    </>
  );
};

export default UploadImage;
