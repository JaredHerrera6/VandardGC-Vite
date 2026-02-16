import React from "react";
import fencegate from "../pictures/fence-9.JPG";
import vinyl from "../pictures/fence-5.JPG";
import pfence from "../pictures/fence-1.JPG";
import Gallerycards from "../components/Gallerycards";
import FencePicData from "../PicData/FencePicData";
import ServicesSection from "../components/ServiceCards";

const serviceData = [
    {
      title: "Vinyl",
      description:
        "Our vinyl fencing services provide durable, low-maintenance, and stylish fencing solutions that enhance privacy, security, and curb appeal for your home or business.",
      image:
        vinyl,
      features: [
        "Vinyl Privacy Fence Installation",
        "Vinyl Fence repair and replacement ",
        "Vinyl Fence Gate Installation",
      ],
      price: "&&&",

    },
    {
      title: "Pressure treated Fencing",
      description:
        "Our pressure-treated wood fence installation provides a strong, weather-resistant, and cost-effective solution that delivers lasting privacy, security, and natural curb appeal.",
      image:
        pfence,
      features: [
        "Privavy Fence Installation",
        "Custom wood fence design ",
        "Pressure treated wood Fence Gate Installations",
      ],
      price: "$$",
      popular: true,
    },
  ]

function Fence() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Fencing Services</h1>
        <h3>
          Premium and durable Fencing solution Provided by Local Professionals
        </h3>
      </div>
      {/*Services Card Components*/}
      <ServicesSection services={serviceData} columns={2}/>

      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Recent Fence Installation Projects</h1>
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
