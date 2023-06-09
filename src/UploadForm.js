import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PixlyApi } from "./API";
import './UploadForm.css';

/** Form for uploading and editing photos.
 *
 * State:
 * - selectedPhoto: holds the photo file blob and formdata
 *
 * Ref:
 * - canvasRef: holds the current reference for the canvas
 */

//TODO: Change the functionality to hold the blob in React state.

function UploadForm() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const canvasRef = useRef();
  const navigate = useNavigate();

  /** Handle chosen photo form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();

    const file = evt.target.files[0];

    const reader = new FileReader();

    /** Waits for the photo to load then draws an Image class on the canvas.
     * Update the selected photo state with the newly created blob file.
     */
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

    reader.readAsDataURL(file);
  }

  /** Apply a washout filter using Caman. */
  function applyWashOut() {
    window.Caman(`#canvas`, function () {
      this.brightness(10);
      this.contrast(90);
      this.sepia(60);
      this.saturation(-30);
      this.render();
    });
  }

  /** Apply a sepia filter using Caman. */
  function applySepia() {
    window.Caman(`#canvas`, function () {
      this.brightness(10);
      this.contrast(30);
      this.sepia(60);
      this.saturation(-30);
      this.render();
    });
  }

  /** Apply a hot Rithm filter using Caman. */
  function applyRithm() {
    window.Caman(`#canvas`, function () {
      this.vibrance(81);
      this.hue(100);
      this.clip(42);
      this.contrast(30);
      this.exposure(14);
      this.render();
    });
  }

  /** Remove the currently applied filter using Caman. */
  function removeFilter() {
    window.Caman(`#canvas`, function () {
      this.revert();
    });
  }

  /** Handle photo upload. Append any filters that were applied to the formdata,
   * add the blob and send the photo to the backend API.
   * Redirect to the photos page.
   */
  async function handleUpload(evt) {
    evt.preventDefault();
    if (selectedPhoto) {

      const canvas = canvasRef.current;
      canvas.toBlob(async function (blob) {
        // Create a FormData object to send the Blob as part of the request
        const formData = new FormData();
        formData.append('image', blob);

        await PixlyApi.uploadPhoto(formData);
        navigate('/photos');
      });
    }
  };

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
          <div>
            <canvas
              ref={canvasRef}
              id="canvas"
              style={{ maxInlineSize: '500px' }}>
            </canvas>
          </div>

        </div>
      </div>

      <div className="row filter-btns m-3">
        <div className="col-md-10 m-auto">
          <button className="m-3 btn btn-ig" onClick={applyWashOut}>
            Washout
          </button>
          <button className="m-3 btn btn-ig" onClick={applySepia}>Sepia</button>
          <button className="m-3 btn btn-ig" onClick={applyRithm}>Rithm</button>
        </div>
      </div>
      <div>
        <button className="upload-photo btn btn-ig m-2" onClick={handleUpload}>
          Upload
        </button>
        <button className="btn btn-ig m-2" onClick={removeFilter}>
          Clear
        </button>
      </div>
    </div>
  );
}
export default UploadForm;