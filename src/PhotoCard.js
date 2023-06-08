import React from "react";

function PhotoCard({ photo }) {
    console.log(photo);
    return (
        <div className="container">
            <img className="img-fluid img-thumbnail" src={photo.objectURL}></img>
            <p>{photo.caption}</p>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-info">Edit</button>
        </div>
    )
}

export default PhotoCard;