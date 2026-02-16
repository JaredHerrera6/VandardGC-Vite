import React from "react";
import fencegate from "../pictures/fence-9.JPG";
import vinyl from "../pictures/fence-5.JPG";
import pfence from "../pictures/fence-1.JPG";
import Gallerycards from "../components/Gallerycards";
import FencePicData from "../PicData/FencePicData";
import ServicesSection from "../components/ServiceCards";
import PageHeader from "../components/PageHeader";
import fencebg from "../pictures/fence-9.JPG"
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

      <PageHeader 
        title={"Fencing Services"} 
        subtitle={"Premium and durable Fencing solution Provided by Local Professionals"}
        backgroundImage={fencebg}
        phoneNumber={"202-855-4942"}
      />

      
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
