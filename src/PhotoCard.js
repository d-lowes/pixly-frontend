import React from "react";
import { PixlyApi } from "./API";

function PhotoCard({ photo, handleDelete }) {

    return (
        <div className="container">
            <img className="img-fluid img-thumbnail" src={photo.objectURL}
                alt={photo.photoId}></img>
            <div>
                <button className="btn btn-danger"
                onClick={() => handleDelete(photo)}>Delete</button>
            </div>
            <div><br></br></div>
        </div>
    );
}

export default PhotoCard;