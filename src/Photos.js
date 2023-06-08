import React, { useEffect, useState } from "react";
import { PixlyApi } from "./API";


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


    return (
        <div>
            <h1>Photos</h1>
        </div>
    )

};

export default Photos;