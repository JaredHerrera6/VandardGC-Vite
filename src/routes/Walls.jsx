import React from "react";
import Gallerycards from "../components/Gallerycards";
import Blockwall from "../pictures/Masonry-3.jpg";
import Concretewall1 from "../pictures/concretewall-2.jpg";
import Decorativewall from "../pictures/concretewall-3.jpg";
import WallPicData from "../PicData/WallPicData";
function Walls() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Retaining Wall Services</h1>
        <h3>
          Premium, Reliable, and Durable Retaining wall installation services by
          Local Professionals
        </h3>
      </div>
      <div className="wallservice-wrapper">
        {/*Block wallS Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={Blockwall} alt="BlockWall" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Block Walls</h3>
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
        {/*Concrete Wall Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={Concretewall1} alt="Concrete wall " />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Concrete Walls</h3>
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
        {/*Dercorative wall  Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={Decorativewall} alt="Decorative wall" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Decorative Walls</h3>
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
        <h1 className="homegallery-header">Retaining Wall Works</h1>
        <div className="home-gallery">
          {WallPicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Walls;
