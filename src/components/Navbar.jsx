import React from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/favicon256.png";
import logo2 from "../pictures/Vandardfavicon2.PNG";
import biglogo from "../pictures/biglogo.jpg";
import VandardIcon from "./VandardIcon";
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-logo" style={{ padding: "0" }}>
          <img
            className="applogo"
            src={biglogo}
            alt="logo"
            style={{ padding: "0", borderRadius: "20px" }}
          />
        </li>
        <div className="links">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
            <ul className="dropdown">
              <li>
                <Link to="/Concrete">Concrete Installation</Link>
              </li>
              <li>
                <Link to="/Walls">Retaining Walls</Link>
              </li>
              <li>
                <Link to="/Drainage">Drainage Solutions</Link>
              </li>
              <li>
                <Link to="/Excavation"> Excavation</Link>
              </li>
              <li>
                <Link to="/Fence">Fence Installation</Link>
              </li>
              <li>
                <Link to="/Demolition">Demolition</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Gallery" className="navbar-link">
              Our Work
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="navbar-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="navbar-link">
              Contact Us
            </Link>
          </li>
        </div>
        <li>
          <Link to="/ContactUs" className="contact-button">
            Free Quote
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
