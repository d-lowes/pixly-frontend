import React from "react";
import './PhotoCard.css';

/** Renders a photo card
 *
 * Props:
 * -photo => {objectURL: '', metadata: '', photoId: ''}
 *
 * -handleDelete => function
 *
 * Photos -> PhotoCard
 */
function PhotoCard({ photo, handleDelete }) {

    return (
        <div className="container">
            <img className="img-fluid img-thumbnail" src={photo.objectURL}
                alt={photo.photoId}></img>
            <div>
                <button className="btn btn-ig m-2"
                    onClick={() => handleDelete(photo)}>Delete</button>
            </div>
            <div><br></br></div>
        </div>
    );
}

export default PhotoCard;