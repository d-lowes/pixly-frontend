import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UploadForm.css';

function UploadForm() {

  function handleClick(evt) {
    // evt.preventDefault();

  }

  return (
    <div className="upload-img-container m-4">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="custom-file mb-3">
            <input
              type="file"
              className="custom-file-input"
              name="image"
              id="upload-file"></input>
            <label htmlFor="upload-file" className="custom-file-label">
              Select image
            </label>
          </div>
          <canvas id="canvas"></canvas>
          <h4 className="text-center my-3">Filters</h4>
          <div className="row mb-3 m-1">
            <div className="col-md-3">
              <button
                className="filter-btn vintage-add btn btn-ig btn-block"
                onClick={handleClick}>
                Vintage
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="filter-btn clarity-add btn btn-ig btn-block"
                onClick={handleClick}>
                Clarity
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="filter-btn hazy-days-add btn btn-ig btn-block"
                onClick={handleClick}>
                Hazy Days
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="filter-btn her-majesty-add btn btn-ig btn-block"
                onClick={handleClick}>
                Her Majesty
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <button className="remove-btn btn btn-danger"
              onClick={handleClick}>
              Remove Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;