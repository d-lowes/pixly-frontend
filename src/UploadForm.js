import React, { useState, useRef } from "react";
import './UploadForm.css';
import { PixlyApi } from "./API";


function UploadForm() {
  const canvasRef = useRef();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Save the canvas as a new image
        canvas.toBlob((blob) => {
          const convertedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now()
          });

          setSelectedPhoto(convertedFile);
        }, file.type);
      };

      img.src = event.target.result;
    };


    console.log("file", file);
    reader.readAsDataURL(file);
  }

  async function handleUpload(evt) {
    evt.preventDefault();
    if (selectedPhoto) {

      console.log("photo inside handleupload===", selectedPhoto);

      const formData = new FormData()
      formData.append('image', selectedPhoto);
      await PixlyApi.uploadPhoto(formData);
    }
  }

  return (
    <div className="upload-img-container m-4">
      <div className="row">
        <div className="col-md-10 m-auto">
          <form>
            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                name="image"
                id="upload-file"
                onChange={handleSubmit}
              />
              <label htmlFor="upload-file" className="custom-file-label">
                Select image
              </label>
            </div>
          </form>
          <canvas
            ref={canvasRef}
            id="canvas"
            style={{ width: '500px', height: '300px' }}>
          </canvas>
          <div>
            <button className="upload-photo" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UploadForm;