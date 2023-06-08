import React, { useState, useRef } from "react";
import './UploadForm.css';

function UploadForm() {
  const canvasRef = useRef();

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
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  function handleClick(evt) {
    // evt.preventDefault();

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
        </div>
      </div>
    </div>
  );
}

export default UploadForm;