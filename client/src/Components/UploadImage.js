import React, {useState} from "react";

const UploadImage = (props) => {
    const [ urlString ] = props
    const [file, setFile] = useState('')

    const handleFile = () => {
        
    }

    const handleUpload = () => {

    }

  return (
    <>
      {image === "" ? <form>
        <input type="file" ></input>
        <button>Upload</button>
      </form>}
    </>
  );
};

export default UploadImage;
