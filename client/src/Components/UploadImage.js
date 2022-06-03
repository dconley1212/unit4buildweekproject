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
    const userFile = new FormData();
    userFile.append("File", file);
    axios.put(props.urlString, userFile, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setImage(props.urlString);
  };

  return (
    <>
      {image === null ? (
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFile} accept="image/*"></input>
          <button>Upload</button>
        </form>
      ) : (
        <img src={file} alt="plants"></img>
      )}
    </>
  );
};

export default UploadImage;
