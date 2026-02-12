import React from "react";
import waterproof from "../pictures/water-proof1.jpg";
import drain from "../pictures/drain-4.JPG";
import downspout from "../pictures/drain-2.JPG";
import DrainpicData from "../PicData/DrainPicData";
import Gallerycards from "../components/Gallerycards";
function Drainage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Drainage Solutions</h1>
        <h3>
          Effective and Reliable Storm Drain Solution services by Local
          Professionals
        </h3>
      </div>
      <div className="wallservice-wrapper">
        {/*Block wallS Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={drain} alt="BlockWall" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Drains</h3>
            </div>
            <div className="card-text">
              <p>
                Our Cinder Block Retaining Walls offer our customers with an
                affordable and fully functionional solution for various
                applications. Contact us now to learn more about how our cinder
                block wall installations could help you achieve your desired
                goals.
              </p>
            </div>
          </div>
        </div>
        {/*Waterproof Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={waterproof} alt="Concrete wall " />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Water Proofing</h3>
            </div>
            <div className="card-text">
              <p>
                Our Concrete walls serve as a our most industral grade solution
                for retaining walls. Our concrete wall services are very diverse
                and can be applied to many different areas. Contact us today to
                learn more.
              </p>
            </div>
          </div>
        </div>
        {/*Downspouts wall  Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={downspout} alt="Decorative wall" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>DownSpouts</h3>
            </div>
            <div className="card-text">
              <p>
                We offer a wide selection of retaining wall services to add some
                eye catching features to our clints properties. From garden
                decor to seating areas, we can turn any boring site to an eye
                catching and functional decoration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Recent Drainage Solutions</h1>
        <div className="home-gallery">
          {DrainpicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Drainage;
