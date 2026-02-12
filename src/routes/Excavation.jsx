import React from "react";
import excavation from "../pictures/excavation-1.jpg";
import demolition from "../pictures/demo-1.JPG";
import trench from "../pictures/trench.JPG";
import ExcavationPicData from "../PicData/ExcavationPicData";
import Gallerycards from "../components/Gallerycards";
function Excavation() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Excavation and Demolition Services</h1>
        <h3>
          Take the First steps to you projects and transformation with our
          Excavation/Demolition Services
        </h3>
      </div>
      <div className="wallservice-wrapper">
        {/*Excavation Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={excavation} alt="excavation" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Excavation</h3>
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
        {/*Demolition Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={demolition} alt="demolition " />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Demolition</h3>
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
        {/*Trenching Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={trench} alt="Decorative wall" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Trenching</h3>
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
          {ExcavationPicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Excavation;
