import React, { useEffect, useState } from "react";
import { PixlyApi } from "./API";
import PhotoCard from "./PhotoCard";

/** Component for rendering all the uploaded photos from the S3 bucket.
 *
 * State:
 * - photoList: holds the current array of photo objects.
 * - isLoading: displays a loading message when the component is rendering.
 *
 */
function Photos() {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** Render the list of photos on component mount. Set the photoList and
   * isLoading state.
   */
  useEffect(() => {
    async function getPhotos() {
      const response = await PixlyApi.getPhotos();
      setPhotoList(response);
      setIsLoading(false);
    }

    getPhotos();
  }, []);

  /** Handle the deletion of a photo by sending a request to the backend,
   * and updating the state of photoList without the deleted photo.
   */
  async function handleDelete(photo) {
    await PixlyApi.deletePhoto(photo.photoId);
    console.log("photo", photo.photoId);
    setPhotoList(
      prevPhotoList => prevPhotoList.filter(p => p.photoId !== photo.photoId)
    );
  }

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      {photoList.map(
        photo => <PhotoCard
          key={photo.photoId}
          photo={photo}
          handleDelete={handleDelete} />
      )}
    </div>
  );

};

export default Photos;