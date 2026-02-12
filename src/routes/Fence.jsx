import React from "react";
import fencegate from "../pictures/fence-9.JPG";
import vinyl from "../pictures/fence-5.JPG";
import pfence from "../pictures/fence-1.JPG";
import Gallerycards from "../components/Gallerycards";
import FencePicData from "../PicData/FencePicData";
function Fence() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Fencing Services</h1>
        <h3>
          Premium and durable Fencing solution Provided by Local Professionals
        </h3>
      </div>
      <div className="wallservice-wrapper">
        {/*Vinyl Fencing Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={vinyl} alt="vinyl fencing" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Vinyl Fencing</h3>
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
        {/*Pressure Treated Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={pfence} alt="pressure treated" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Pressure treated Fencing</h3>
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
        {/*Fence Gates Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={fencegate} alt="Fence Gates" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Fence Gates</h3>
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
          {FencePicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Fence;
