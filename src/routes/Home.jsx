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
import { FiArrowRightCircle } from "react-icons/fi";
import Gallerycards from "../components/Gallerycards";
import HomePicData from "../PicData/HomePicData";
import marylandbackground from "../pictures/maryland-background.jpg";
const SERVICE_ID = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID;
const FORMID = import.meta.env.VITE_APP_EMAIL_FORM;
import  { useState, useEffect } from 'react';
import MarylandCitiesSection from "../components/MdSections";
import PageHeader from "../components/PageHeader";
import background5 from "../pictures/concrete-5.jpg"
import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";
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
      <MarylandCitiesSection/>
    </div>
  );
}



function Mailer() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, FORMID)
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
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-neutral-900/90 backdrop-blur-xl border border-red-900/60 rounded-2xl shadow-[0_0_50px_rgba(127,29,29,0.25)] p-8 md:p-12"
      >
        <div className="flex justify-center mb-4 text-red-700 text-4xl">
          <FaFileContract />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-wider">
          Premium Project Consultation
        </h2>

        <div className="w-20 h-[2px] bg-gradient-to-r from-red-900 via-yellow-600 to-red-900 mx-auto my-6"></div>

        <p className="text-neutral-400 text-center mb-8">
          Exceptional craftsmanship. Refined execution. Tell us about your project.
        </p>

        <form onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-red-800 mb-2 uppercase tracking-[2px]">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first-name"
                placeholder="E.g., John"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-red-800 mb-2 uppercase tracking-[2px]">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last-name"
                placeholder="E.g., Cena"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-red-800 mb-2 uppercase tracking-[2px]">
                Email Address
              </label>
              <input
                type="email"
                id="_email"
                name="email"
                placeholder="E.g., customer@gmail.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-red-800 mb-2 uppercase tracking-[2px]">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="E.g., 111-222-3333"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-red-800 mb-2 uppercase tracking-[2px]">
              Service Description
            </label>
            <textarea
              rows="5"
              id="emessage"
              name="emessage"
              placeholder="Enter message..."
              required
              className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-red-900 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-900 via-yellow-600 to-red-900 hover:brightness-110 text-white font-bold py-4 rounded-lg shadow-lg transition duration-300 tracking-wider"
          >
            REQUEST CONSULTATION
          </button>
        </form>
      </motion.div>
    </div>
  );
}


export default Home;
