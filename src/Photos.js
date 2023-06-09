import React, { useEffect, useState } from "react";
import { PixlyApi } from "./API";
import { click } from "@testing-library/user-event/dist/click";
import PhotoCard from "./PhotoCard";

function Photos() {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPhotos() {
      const response = await PixlyApi.getPhotos();
      setPhotoList(response);
      setIsLoading(false);
    }

    getPhotos();
  }, []);

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