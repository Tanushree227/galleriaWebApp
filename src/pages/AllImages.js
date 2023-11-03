import React, { useEffect, useState } from "react";
import ImageList from "../components/images/ImageList";

/***const DUMMY_DATA = [
    {
        id: 'i1',
        name: 'Guatemala',
        image:
          'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        title: 'Flower Images',
        description:
          'This is a first, amazing image which you definitely should not miss to view.',
      },
      {
        id: 'i2',
        name: 'Workspace',
        image:
          'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        title: 'Work-Mode Image',
        description:
          'This is a corporate image, which gives monday vibes.',
      },
];***/

function AllImages() 
{
  const [isLoading, setIsLoading] = useState(true);
  const[loadedImages, setLoadedImages] = useState([]);

  useEffect(() => 
  {
    setIsLoading(true);

    fetch(
      'https://galleria-a870c-default-rtdb.firebaseio.com/gallery.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const photos = [];

      for(const key in data)
      {
        const photo = {
          id: key,
          ...data[key]
        };

        photos.push(photo)
      }

      setIsLoading(false);
      setLoadedImages(photos);
    });
  }, []);

  if(isLoading)
  {
    return(
      <section>
        <p>Loading....</p>
      </section>
    )
  }
    
  return(
        <section>
            <h1>All Images</h1>
            <ImageList photos={loadedImages} />
        </section>
    );
}

export default AllImages;