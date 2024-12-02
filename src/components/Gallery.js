import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <div
          key={image.id}
          className="gallery-item"
          onClick={() => openLightbox(image)}
        >
          <span>
            <img src={image.url} alt={image.category} />
          </span>
        </div>
      ))}

      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={currentImage.url} alt={currentImage.category} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

// import React from "react";

// const Gallery = ({ images }) => {
//   return (
//     <div className="gallery">
//       {images.map((image) => (
//         <div key={image.id} className="gallery-item">
//           <span>
//             <img src={image.url} alt={image.category} />
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;
