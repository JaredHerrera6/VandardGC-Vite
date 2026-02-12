import React from "react";
/*Function to make the gallery depending on the page
and images thst are needed */
function Gallerycards(props) {
  return (
    <div className="gallery-card">
      <img src={props.image} alt={props.alt} />
    </div>
  );
}

export default Gallerycards;
