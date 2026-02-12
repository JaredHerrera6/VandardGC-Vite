import React from "react";
import maryland from "../pictures/maryland.jpg";
import marylandbackground from "../pictures/maryland-background.jpg"
function AboutUs() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>About Vandard</h1>

        <h3>
          Honest service, fair pricing, and results built to last for our
          Maryland customers.
        </h3>
      </div>

      <div className="paragraphs">
        <p>
          Vandard General Contracting LLC is a family-owned, Maryland-based
          concrete construction company built on hard work, precision, and
          reliability. With years of hands-on experience, we provide
          high-quality concrete solutions for both residential and commercial
          projects, including driveways, patios, sidewalks, slabs, foundations,
          and custom concrete work.
        </p>
        <p>
          As a family-owned business, we take pride in our reputation and the
          relationships we build with our clients. Our team is committed to
          doing the job right the first time. From proper site preparation and
          accurate grading to clean finishes and long-lasting results, we focus
          on quality craftsmanship and clear communication at every stage of the
          project.
        </p>
        <p>
          We understand that concrete is a long-term investment, which is why we
          never cut corners. We use proven materials, industry-standard
          practices, and attention to detail to ensure strength, durability, and
          performance you can rely on for years to come. Our crew respects your
          property, maintains a clean and safe job site, and works efficiently
          to meet agreed-upon timelines.
        </p>
        <p>
          Whether you’re upgrading your home, repairing existing concrete, or
          starting a new construction project, Vandard General Contracting LLC
          is committed to delivering durable, professional concrete work you can
          trust. Our goal is simple: honest service, fair pricing, and results
          built to last for our Maryland customers.
        </p>
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

export default AboutUs;
