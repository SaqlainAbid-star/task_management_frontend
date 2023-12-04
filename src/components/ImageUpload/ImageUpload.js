// frontend/src/ImageUpload.js

import React, { useState } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (base64) => {
    setImage(base64);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/uploadItemImage', { base64: image.base64 })
      .then((response) => {
        console.log(response.data);
        // Image uploaded successfully, you can add any further logic here
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log(image.base64);
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <FileBase64
        multiple={false}
        onDone={handleImageUpload}
      />
      <button onClick={handleSubmit}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
