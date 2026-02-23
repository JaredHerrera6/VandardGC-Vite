import React from "react";
import waterproof from "../pictures/water-proof1.jpg";
import drain from "../pictures/drain-4.JPG";
import downspout from "../pictures/drain-2.JPG";
import DrainpicData from "../PicData/DrainPicData";
import Gallerycards from "../components/Gallerycards";
import ServicesSection from "../components/ServiceCards";
import PageHeader from "../components/PageHeader";
import MarylandCitiesSection from "../components/MdSections";
const serviceData = [
    {
      title: "Drainage Systems ",
      description:
        "Proper drainage is essential for homeowners because it prevents water damage, protects foundations, reduces erosion, and helps maintain the long-term safety and value of the property.",
      image:
        drain,
      features: [
        "Fench Drain Installations",
        "PVC drain systems",
        "Channel Drains",
        "Drainage Catch Basin Installation",
      ],
      price: "$$",
      popular:"true"
    },
    {
      title: "Water Proofing",
      description:"Proper waterproofing is essential for homeowners because it prevents moisture intrusion, protects structural integrity, and safeguards against mold, rot, and costly long-term damage.",
      image:
        waterproof,
      features: [
        "Foundation waterproofing",
        "Sump Pump Installations",
        "Exterior Wall Water Proofing",
        "Foundwation Crack Repairs"
      ],
      price: "$$$",
      popular: false,
    },
    {
      title: "Downspouts",
      description:
        "Proper downspout redirection is essential for homeowners because it directs rainwater away from the foundation, preventing erosion, basement flooding, and costly structural damage.",
      image:
        downspout,
      features: [
        "Downspout Extensions ",
        "Underground Drain Lines",
        "Drainage Tie-ins",
        "Pop-up Drain Emitters"
      ],
      price: "$$",
      popular: false,
    },
  
  ];

function Drainage() {
  return (
    <div className="page-wrapper">

      <PageHeader 
        title={"Drainage Solutions"} 
        subtitle={"Effective and Reliable Storm Drain Services by local Professionals"}
        backgroundImage={drain}
        phoneNumber={"202-855-4942"}
      />

      {/*Services Card Components*/}
      <ServicesSection services={serviceData} columns={3}/>

      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Recent Drainage Solutions</h1>
        <div className="home-gallery">
          {DrainpicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
      <MarylandCitiesSection/>
    </div>
  );
}

export default Drainage;
