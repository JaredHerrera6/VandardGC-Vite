import React from "react";
import excavation from "../pictures/excavation-1.jpg";
import demolition from "../pictures/demo-1.JPG";
import trench from "../pictures/trench.JPG";
import ExcavationPicData from "../PicData/ExcavationPicData";
import Gallerycards from "../components/Gallerycards";
import ServicesSection from "../components/ServiceCards";
const serviceData = [
    {
      title: "Excavation",
      description:
        "Our professional excavation services provide precise, efficient site preparation for foundations, drainage, and construction projects, ensuring a stable base and smooth start for any build.",
      image:
        excavation,
      features: [
        "Site Preparation",
        "Drainage and Grading Excavation",
        "Land Clearing ",
        "Back Filling & Compaction",
      ],
      price: "&&&",

    },
    {
      title: "Demolition",
      description:
        "Our professional demolition services deliver safe, efficient, and controlled removal of structures and concrete, preparing your site quickly and cleanly for the next phase of construction.",
      image:
        demolition,
      features: [
        "Concrete Removal",
        "Asphalt Removal",
        "Debris Hauling and Site Cleanup ",
        "Residential Structure Demolition",
      ],
      price: "$$",
      popular: false,
    },
    {  
      title: "Trenching",
      description:
        "Our professional trenching services provide precise, efficient excavation for utilities, drainage, and foundations, ensuring safe installation and long-lasting performance for your project.",
      image:
        trench,
      features: [
        "Utility line trenching",
        "Drainage system trenching",
        "Foundationa dn footing Trenching",
        "Irrigation and Landscape trenching",
      ],
      price: "$10/sqft",
      popular: false,
    },
  ]

function Excavation() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Excavation and Demolition Services</h1>
        <h3>
          Take the First steps to you projects and transformation with our
          Excavation/Demolition Services
        </h3>
      </div>
      {/*Services Card Components*/}
      <ServicesSection services={serviceData} columns={3}/>
    
      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Recent Excavation/Demolition Projects</h1>
        <div className="home-gallery">
          {ExcavationPicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Excavation;
