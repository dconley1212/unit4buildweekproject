import React, { useState } from "react";
import axios from "axios";

const UploadImage = (props) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    axios.put(props.urlString, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });
  };

  const handleUpload = () => {
    const imageUrl = props.urlString.split("?")[0];
    setImage(imageUrl);
  };

  return (
    <>
      {image === null ? (
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFile}></input>
          <button>Upload</button>
        </form>
      ) : (
        <img src={image} alt="plants"></img>
      )}
    </>
  );
};

export default UploadImage;
