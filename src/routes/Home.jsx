import React from "react";
import homepic from "../pictures/Stamped-2.jpg";
import homedrain from "../pictures/drain-4.JPG";
import concretehome from "../pictures/concrete-1.jpg";
import wallhome from "../pictures/Masonry-3.jpg";
import excavationhome from "../pictures/trench.JPG";
import demohome from "../pictures/demo-1.JPG";
import fencehome from "../pictures/fence-9.JPG";
import maryland from "../pictures/maryland.jpg";
import { Link } from "react-router-dom";
import image1 from "../pictures/Stamped-9.jpg";
import ImageSlider from "../components/ImageSlider";
import emailjs from "@emailjs/browser"
import { FaFileContract } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import Gallerycards from "../components/Gallerycards";
import HomePicData from "../PicData/HomePicData";
import marylandbackground from "../pictures/maryland-background.jpg";
const SERVICE_ID = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID;
const FORMID = import.meta.env.VITE_APP_EMAIL_FORM;
import  { useState, useEffect } from 'react';

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
      <div className="main-header">
        <h1>Vandard General Contracting</h1>
        <h3>
          Quality Construction Services and Solutions. Call Now For a Free
          Consultation
        </h3>
      </div>
      <div className="slider-quote">
        <div className="home-slider" >
          <ImageSlider slides={slides} />
        </div>
        <div className="quote-box">
          <Mailer />
        </div>
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
        <h1 className="homegallery-header">Recently Completed Works</h1>
        <div className="home-gallery">
          {HomePicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>

      <div className="serviceareas-wrapper">
        <h1 className="mainService-header">Where We Work</h1>
        <div
          className="service-areas "
          style={{ backgroundImage: `url(${marylandbackground})` }}
        >
          <img src={maryland} alt="maryland image" />
          <div className="city-list">
            <div className="serviceArea-header">
              <h1>Areas Serviced</h1>
            </div>
            <div className="list-wrapper">
              <ul className="servicearea-list">
                <li>Waldorf</li>
                <li>La Plata</li>
                <li>Brandywine</li>
                <li>Clinton</li>
                <li>Annapolis</li>
              </ul>
              <ul className="servicearea-list">
                <li>Laurel</li>
                <li>Frederick</li>
                <li>Silver Spring</li>
                <li>& More!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//The Form that will allow customers to send email to the Owner
function Mailer() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.target,
      FORMID
    )
    .then(() => {
      alert("Message sent!");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send.");
    });
    e.target.reset();
  };
  return (
    <div>
      <form className="email_form" onSubmit={sendEmail}>
        <div className="contract-icon">
          <FaFileContract />
        </div>
        <h2 className="quote-header">Get a Free Quote</h2>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          placeholder="E.g, John"
          name="first-name"
          required
        ></input>

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          placeholder="E.g., Cena"
          name="last-name"
          required
        ></input>

        <label htmlFor="_email">Email</label>
        <input
          type="email"
          id="_email"
          placeholder="E.g., customer@gmail.com"
          name="email"
          required
        ></input>

        <label htmlFor="phone_number">Phone #</label>
        <input
          type="tel"
          id="phone_number"
          placeholder="E.g.,111-222-3333"
          name="phone_number"
          required
        ></input>

        <label htmlFor="emessage">Service Description </label>
        <textarea
          type="message"
          rows="5"
          id="emessage"
          placeholder="Enter Message ..."
          name="emessage"
          required
        ></textarea>
        <br />

        <input type="submit" value="Submit" id="send_email" />
      </form>
    </div>
  );
}

export default Home;
