import React from "react";
import homepic from "../pictures/Stamped-2.jpg";
import homedrain from "../pictures/drain-4.JPG";
import concretehome from "../pictures/concrete-1.jpg";
import wallhome from "../pictures/Masonry-3.jpg";
import excavationhome from "../pictures/trench.JPG";
import demohome from "../pictures/demo-1.JPG";
import fencehome from "../pictures/fence-9.JPG";
import { Link } from "react-router-dom";
import image1 from "../pictures/Stamped-9.jpg";
import ImageSlider from "../components/ImageSlider";
import { FiArrowRightCircle } from "react-icons/fi";
import Gallerycards from "../components/Gallerycards";
import HomePicData from "../PicData/HomePicData";
import MarylandCitiesSection from "../components/MdSections";
import PageHeader from "../components/PageHeader";
import background5 from "../pictures/concrete-5.jpg"
import Mailer from "../components/Mailer";
function Home() {
  const slides = [
    {
      url: wallhome,
      title: "masonry",
    },
    {
      url: concretehome,
      title: "concrete",
    },
    {
      url: homedrain,
      title: "homedrain",
    },
    {
      url: homepic,
      title: "homepic",
    },
    {
      url: image1,
      title: "image1",
    },
  ];
  const containerStyles = {
    height: "600px",
    width: "600px",
    border: " 1px solid burgundy",
  };


  return (
    <div className="home-container">
      <PageHeader 
        title={"Vandard General Contracting"} 
        subtitle={"Quality Construction Services and Solutions. Call Now For a Free Consultation"}
        backgroundImage={background5}
        phoneNumber={"202-855-4942"}
      />
      <div className="main-header">
        <h1>Get A Free Quote Today </h1>
       
      </div>
      <div className="slider-quote">
        <div className="home-slider" >
          <ImageSlider slides={slides} />
        </div>
        
          <Mailer />
        
      </div>

      <div className="services">
        <div className="services-header">
          <h3 className="services-top">Our Services</h3>
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
                We offer several solutions for all of your water drainage needs
                to help eliminate any occuring and future issues.
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
                clearing. Learn more on your we can provide the best excavation
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
                Our Demolition Services give our customers a fresh start,
                whether to make way for a new project or just to free up some
                space!!
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
      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Recently Completed Projects</h1>
        <div className="home-gallery">
          {HomePicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
      <MarylandCitiesSection/>
    </div>
  );
}






export default Home;
