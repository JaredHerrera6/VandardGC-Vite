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
      <div className="main-header">
        <h1>Contact Us Today</h1>
        <h3>
          Quality Construction Services and Solutions. Call Now For a Free
          Consultation
        </h3>
      </div>
      <div className="slider-quote">
        <div className="home-slider" style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        <div className="quote-box">
          <Mailer />
        </div>
      </div>

      <div className="serviceareas-wrapper">
        <h1 className="mainService-header">Where We Work</h1>
        <div 
          className="service-areas" 
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

export default ContactUs;
