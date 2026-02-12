import React from "react";
import GalleryPicData from "../PicData/GalleryPicData";
import Gallerycards from "../components/Gallerycards";
function Gallery() {
  return (
    <div className="homegallery-wrapper" style={{ paddingTop: "22vh " }}>
      <h1 className="homegallery-header">Recently Completed Works</h1>
      <div className="home-gallery">
        {GalleryPicData.map((item, index) => {
          return Gallerycards(item);
        })}
      </div>
    </div>
  );
}

export default Gallery;
