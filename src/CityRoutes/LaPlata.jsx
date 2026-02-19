import React from "react";
import PageHeader from "../components/PageHeader";
import CityPage from "../components/CityPage";
import marylandbg from "../pictures/maryland-background.jpg"
const city = "La Plata"
function Laplata() {
  return (
    <>
    <PageHeader
      title={city}
      subtitle={`Quality Construction Services and Solutions In ${city} . Call Now for a Free Consultation`}
      backgroundImage={marylandbg}
      phoneNumber={"202-855-4942"}
    />
    <CityPage city = {city} />
    
    </>
  )
}

export default Laplata;