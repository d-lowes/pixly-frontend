import React from "react";


function PhotoCard({ photo }) {
    console.log(photo);
    return (
        <div className="container">
            <img className="img-fluid img-thumbnail" src={photo.objectURL}
                alt={photo.photoId}></img>
            <div>
                <button className="btn btn-danger">Delete</button>
            </div>
            <div><br></br></div>
        </div>
    );
}

export default PhotoCard;