import React from "react";
import GalleryPicData from "../PicData/GalleryPicData";
import Gallerycards from "../components/Gallerycards";
import MarylandCitiesSection from "../components/MdSections";
function Gallery() {
  return (
    <div className="homegallery-wrapper" style={{ paddingTop: "22vh " }}>
      <h1 className="homegallery-header">Recently Completed Projects</h1>
      <div className="home-gallery">
        {GalleryPicData.map((item, index) => {
          return Gallerycards(item);
        })}
      </div>
      <MarylandCitiesSection/>
    </div>
  );
}

export default Gallery;
