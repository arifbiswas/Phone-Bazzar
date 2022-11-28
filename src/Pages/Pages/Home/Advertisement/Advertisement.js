import React from "react";

import ImageGallery from 'react-image-gallery';


const Advertisement = ({advertisements}) => {
  const images = []
   advertisements.forEach(advertisement =>  {
      const image = {original : advertisement.picture ,thumbnail :advertisement.picture};
      
      images.push(image)

   })
  return (
    
    <div className="mt-12 ">
      <h2 className="font-bold text-center text-primary text-3xl">
        Advertisement
      </h2>
      <p className="text-center my-3">
        All seller can add your products add this section and verify your
        account with admin
      </p>
      <div>
          <ImageGallery showBullets  autoPlay showIndex  items={images
          }>
          </ImageGallery>
          
      </div>
    </div>
  );
};

export default Advertisement;
