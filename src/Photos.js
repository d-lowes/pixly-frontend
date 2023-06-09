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

  console.log(photoList);

  return (
    <div>
      {photoList.map(
        photo => <PhotoCard key={photo.photoId} photo={photo} />
      )}
    </div>
  );

};

export default Photos;