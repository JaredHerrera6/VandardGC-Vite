import React from "react";
import Gallerycards from "../components/Gallerycards";
import Blockwall from "../pictures/Masonry-3.jpg";
import Concretewall1 from "../pictures/concretewall-2.jpg";
import WallPicData from "../PicData/WallPicData";
import ServicesSection from "../components/ServiceCards";
import PageHeader from "../components/PageHeader";
import wallbg from "../pictures/concretewall-2.jpg"
const serviceData = [
    {
      title: "Block Walls ",
      description:
        "A well-built block wall provides lasting strength, security, and privacy while enhancing property boundaries, improving structural support, and adding long-term value to your home or business.",
      image:Blockwall,
      features: [
        "Wide variety of Block Shapes",
        "Privacy Walls",
        "Cinder Block Foundation walls",
        "Cinder Block Seating walls",
        "Many More Options",
      ],
      price: "$$$",

    },
    {
      title: "Concrete Walls",
      description:
        "A concrete wall is important because it delivers exceptional strength, stability, and durability, providing reliable security, structural support, and long-term protection against weather and external elements",
      image:
        Concretewall1,
      features: [
        "Solid Concrete retaining Wall",
        "HeadWall for Storm Drain Pipes",
        "Extremely long lasting",
        "Low Maintenance",
        "Many more options and applications"
      ],
      price: "$$",
      popular: false,
    },
    
    
  ];
function Walls() {
  return (
    <div className="page-wrapper">
      <PageHeader 
        title={"Retaining Wall Services"} 
        subtitle={"Premium, Reliable, and Durable Retaining Wall Installation Services by local Professionals"}
        backgroundImage={wallbg}
        phoneNumber={"202-855-4942"}
      />


      <div className="page-header">
        <h1>Retaining Wall Services</h1>
        <h3>
          Premium, Reliable, and Durable Retaining wall installation services by
          Local Professionals
        </h3>
      </div>
      {/*Services Card Components*/}
      <ServicesSection services={serviceData} columns={2}/>

      
      <div className="homegallery-wrapper">
        <h1 className="homegallery-header">Retaining Wall Projects</h1>
        <div className="home-gallery">
          {WallPicData.map((item, index) => {
            return Gallerycards(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Walls;
