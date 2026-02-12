import React from "react";
import driveway from "../pictures/concrete-8.JPG";
import sidewalk from "../pictures/concrete-6.jpg";
import patio from "../pictures/concrete-5.jpg";
import slab from "../pictures/concrete-9.jpg";
import Gallerycards from "../components/Gallerycards";
import ConcretePicData from "../PicData/ConcretePicData";
function Concrete() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Concrete Contractor</h1>
        <h3>
          Premium, Reliable, and Durable Concrete installation services by Local
          Professionals
        </h3>
      </div>
      <div className="concreteservice-wrapper">
        {/*Concrete Drivway Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={driveway} alt="concrete driveway" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Driveways</h3>
            </div>
            <div className="card-text">
              <p>
                A New Concrete driveway will give your home a new clean look
                aswell as adding market value to your home. In addition to
                adding curb appeal and home value , our driveway installment
                services will give our clients peace of mind that they have
                recieved a durable and long lasting product.
              </p>
            </div>
          </div>
        </div>
        {/*Concrete Patio Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={sidewalk} alt="concrete sidewalk " />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Sidewalks</h3>
            </div>
            <div className="card-text">
              <p>
                Our concrete Sidewalks and walkways help our customers add both
                accessibility and safety to their propterites. We offer various
                finishes and colors to make our installations fully
                customizable.
              </p>
            </div>
          </div>
        </div>
        {/*Concrete Sidewalk Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={patio} alt="concrete patio" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Patios</h3>
            </div>
            <div className="card-text">
              <p>
                Our Patio Installation Services allow our clients to transform
                their backyards their new Hangout Spot. We allow our clients to
                fully customize and help them design the patio of their dreams.
              </p>
            </div>
          </div>
        </div>
        {/*Concrete Slab Service Card */}
        <div className="service-card">
          <div className="card-image">
            <img src={slab} alt="concrete slab" />
          </div>
          <div className="card-text">
            <div className="cardservice-header">
              <h3>Slabs</h3>
            </div>
            <div className="card-text">
              <p>
                We Install Slabs to help our clients take the initial step in
                their new builds. Our slabs serve as the foundation to a new
                project such as pole barns, house additions, sheds, and much
                more!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Recent Concrete Works</h1>
        <div className="home-gallery">
          {ConcretePicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}
export default Concrete;
