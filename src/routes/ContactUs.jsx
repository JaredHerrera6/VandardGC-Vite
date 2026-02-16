import React from "react";
import homepic from "../pictures/Stamped-2.jpg";
import homedrain from "../pictures/drain-4.JPG";
import concretehome from "../pictures/concrete-1.jpg";
import wallhome from "../pictures/Masonry-3.jpg";
import image1 from "../pictures/Stamped-9.jpg";
import image2 from "../pictures/concrete-11.jpeg";
import image3 from "../pictures/concrete-25.JPG";
import image4 from "../pictures/concrete-14.jpeg";
import ImageSlider from "../components/ImageSlider";
import maryland from "../pictures/maryland.jpg";
import emailjs from "@emailjs/browser";
import marylandbackground from "../pictures/maryland-background.jpg";
import { FaFileContract } from "react-icons/fa";
const SERVICE_ID = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID;
const FORMID = import.meta.env.VITE_APP_EMAIL_FORM;
import MarylandCitiesSection from "../components/MdSections";
import contactusbg from "../pictures/concrete-7.jpg"
import PageHeader from "../components/PageHeader";
import Mailer from "../components/Mailer";
function ContactUs() {
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
      url: image2,
      title: "concrete",
    },
    {
      url: image3,
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
      url: image4,
      title: "concrete",
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
        title={"Contact Us Today"} 
        subtitle={"Quality Construction Services and Solutions. Call Now for a Free Consultation"}
        backgroundImage={contactusbg}
        phoneNumber={"202-855-4942"}
      />

      <div className="main-header">
        <h1>Contact Us</h1>
      </div>
      <div className="slider-quote">
        <div className="home-slider">
          <ImageSlider slides={slides} />
        </div>
        <div className="quote-box">
          <Mailer/>
        </div>
      </div>

      <MarylandCitiesSection/>
    </div>
  );
}



export default ContactUs;
