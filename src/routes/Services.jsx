import React from "react";
import homepic from "../pictures/Stamped-2.jpg";
import homedrain from "../pictures/drain-4.JPG";
import concretehome from "../pictures/concrete-1.jpg";
import wallhome from "../pictures/Masonry-3.jpg";
import excavationhome from "../pictures/trench.JPG";
import demohome from "../pictures/demo-1.JPG";
import fencehome from "../pictures/fence-9.JPG";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

function Services() {
  return (
    <div
      className="services"
      style={{ paddingTop: "22vh", textAlign: "center" }}
    >
      <div className="services-header">
        <h3 className="services-top" style={{ font: "32px" }}>
          Our Services
        </h3>
        <h1> List of Services</h1>
        <h3 className="service-slogan">
          {" "}
          At Vandard General Contracting we offer several Quality construction
          services and solutions.
        </h3>
      </div>
      {/*Home page Cards */}
      <div className="cards-wrapper">
        {/*Concrete home card */}
        <div className="card">
          <div className="card-top">
            <img src={concretehome} />
          </div>
          <div className="card-bottom">
            <p className="top-text">Concrete Contractor</p>
            <p className="bottom-text">
              Improve your homes Aesthetics and outdoor functionality with the
              addition of properly installed concrete. Checkout our concrete
              services page to see what we have in store for our customers!
            </p>
            <p className="card-button">
              <Link to="/Concrete">Learn More</Link>
              <FiArrowRightCircle style={{ color: "yellow" }} />
            </p>
          </div>
        </div>
        {/*Retaining Walls Home Card */}
        <div className="card">
          <div className="card-top">
            {" "}
            <img src={wallhome} />
          </div>
          <div className="card-bottom">
            <p className="top-text">Retaining Walls</p>
            <p className="bottom-text">
              We offer offer various retaining wall designs to provide our
              customers with a beautiful and functional Product.
            </p>
            <p className="card-button">
              <Link to="/Walls">Learn More </Link>
              <FiArrowRightCircle style={{ color: "yellow" }} />
            </p>
          </div>
        </div>
        {/*Drainage Solutions Home Card */}
        <div className="card">
          <div className="card-top">
            <img src={homedrain} />
          </div>
          <div className="card-bottom">
            <p className="top-text">Drainage Solutions</p>
            <p className="bottom-text">
              We offer several solutions for all of your water drainage needs to
              help eliminate any occuring and future issues.
            </p>
            <p className="card-button">
              <Link to="/Drainage">Learn More</Link>
              <FiArrowRightCircle style={{ color: "yellow" }} />
            </p>
          </div>
        </div>
        {/*Excavation Home Card */}
        <div className="card">
          <div className="card-top">
            <img src={excavationhome} alt="trench" />
          </div>
          <div className="card-bottom">
            <p className="top-text">Excavation</p>
            <p className="bottom-text">
              We offer several Excavation Services from trenches to land
              clearing. Learn more on your we can provide the best excavatio
              services to satisy your needs!!
            </p>
            <p className="card-button">
              <Link to="/Excavation">Learn More</Link>
              <FiArrowRightCircle style={{ color: "yellow" }} />
            </p>
          </div>
        </div>
        {/*Demolition Card*/}
        <div className="card">
          <div className="card-top">
            <img src={demohome} alt="demo" />
          </div>
          <div className="card-bottom">
            <p className="top-text">Demolition</p>
            <p className="bottom-text">
              Our Demolition Services give our customers a fresh start, whether
              to make way for a new project or just to free up some space!!
            </p>
            <p className="card-button">
              <Link to="/Demolition">Learn More</Link>
              <FiArrowRightCircle style={{ color: "yellow" }} />
            </p>
          </div>
        </div>
        {/*Fence Card*/}
        <div className="card">
          <div className="card-top">
            <img src={fencehome} alt="fence" />
          </div>
          <div className="card-bottom">
            <p className="top-text">Fence Installation</p>
            <p className="bottom-text">
              We Provide our customers with fencing solutions for aesthetics
              improvements, privacy and security to fulfill their needs!!
            </p>
            <p className="card-button">
              <Link to="/Fence">Learn More</Link>
              <FiArrowRightCircle style={{ color: "yellow" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
