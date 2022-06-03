import React, { useState } from "react";
import axios from "axios";

const UploadImage = (props) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    axios.put(props.urlString, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });
    setImage(props.urlString);
  };

  return (
    <>
      {image === null ? (
        <form onSubmit={handleUpload}>
          <input type="file" value={file} onChange={handleFile}></input>
          <button>Upload</button>
        </form>
      ) : (
        <img src={image} alt="plants"></img>
      )}
    </>
  );
};

export default UploadImage;
