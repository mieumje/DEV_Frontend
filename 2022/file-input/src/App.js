import React, { useState } from "react";
import "./index.css";
import FileInput from "./components/fileInput";

function App() {
  const [fileReaderThumbnail, setFileReaderThumbnail] = useState();
  const [URLThumbnail, setURLThumbnail] = useState();

  const encodeFile = (fileBlob) => {
    const reader = new FileReader();

    if (!fileBlob) return;

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        const result = reader.result;

        setFileReaderThumbnail(result);

        resolve();
      };
    });
  };

  const createImageURL = (fileBlob) => {
    if (URLThumbnail) URL.revokeObjectURL(URLThumbnail);

    const url = URL.createObjectURL(fileBlob);

    setURLThumbnail(url);
  };

  const onFileReaderChange = (e) => {
    const { files } = e.target;

    if (!files || !files[0]) return;

    const uploadImage = files[0];

    encodeFile(uploadImage);
  };

  const onImageChange = (e) => {
    const { files } = e.target;

    if (!files || !files[0]) return;

    const uploadImage = files[0];

    createImageURL(uploadImage);
  };

  return (
    <div className="main">
      <div className="section">
        <h1>File Input by FileReader</h1>
        <div className="image-wrapper">
          {fileReaderThumbnail ? (
            <img src={fileReaderThumbnail} alt="thumbnail" />
          ) : (
            "이미지 미리보기"
          )}
        </div>
        <FileInput label="File Reader Upload" onChange={onFileReaderChange} />
      </div>
      <div className="section">
        <h1>File Input by createObjectURL</h1>
        <div className="image-wrapper">
          {URLThumbnail ? (
            <img src={URLThumbnail} alt="thumbnail" />
          ) : (
            "이미지 미리보기"
          )}
        </div>
        <FileInput label="create object URL Upload" onChange={onImageChange} />
      </div>
    </div>
  );
}

export default App;
