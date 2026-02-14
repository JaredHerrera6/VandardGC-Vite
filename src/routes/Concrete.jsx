import React from "react";
import driveway from "../pictures/concrete-8.JPG";
import sidewalk from "../pictures/concrete-6.jpg";
import patio from "../pictures/concrete-5.jpg";
import slab from "../pictures/concrete-9.jpg";
import Gallerycards from "../components/Gallerycards";
import ConcretePicData from "../PicData/ConcretePicData";
import ServicesSection from "../components/ServiceCards";
const serviceData = [
    {
      title: "Driveways",
      description:
        "Our professional concrete driveway installation delivers a durable, weather-resistant surface that enhances curb appeal, supports heavy loads, and provides long-lasting performance you can rely on.",
      image:
        driveway,
      features: [
        "New Concrete Driveway Installation",
        "Stamped Concrete Driveway",
        "Driveway Extension",
        "Full Concrete Driveway Replacement",
      ],
      price: "$10/sqft",

    },
    {
      title: "Side Walks",
      description:
        "Our concrete sidewalk installation provides a smooth, durable, and slip-resistant surface that improves safety, enhances curb appeal, and stands up to heavy foot traffic and changing weather conditions.",
      image:
        sidewalk,
      features: [
        "Broom Finish",
        "Stamped Concrete",
        "Colored Concrete",
        "Exposed Aggregate",
      ],
      price: "$10/sqft",
      popular: false,
    },
    {
      title: "Slabs",
      description:
        "Our concrete slab installation delivers a strong, level, and long-lasting foundation designed to support structures, equipment, and heavy loads with dependable durability and precision.",
      image:
        slab,
      features: [
        "Garage Slabs",
        "Trowel/Smooth Finish",
        "Foundations",
        "Shed Slabs",
        "Metal Builing Slabs"
      ],
      price: "$10/sqft",
      popular: false,
    },
    {
      title: "Patios",
      description:
        "Our concrete patio installation creates a durable, low-maintenance outdoor space that enhances your home’s value and provides a strong, stylish foundation for relaxing and entertaining year-round.",
      image:
        patio,
      features: [
        "Broom Finish",
        "Stamped Concrete",
        "Colored Concrete",
        "Exposed Aggregate",
        "Concrete Steps"
      ],
      price: "$10/sqft",
      popular: false,
    },
  ];
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
      {/*Services Card Components*/}
      <ServicesSection services={serviceData} columns={4}/>
      
      
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
