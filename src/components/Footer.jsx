import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { GiConcreteBag, GiWarpPipe, GiFreemasonry } from "react-icons/gi";
import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import logo from "../pictures/biglogo.jpg";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <img
          src={logo}
          alt="logo"
          style={{ width: "30%", height: "30%", borderRadius: "20px" }}
        />
        <div className="footer-heading footer-1">
          <b>Social Media </b>

          <a href="https://www.facebook.com/profile.php?id=61586788749253">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/vandard.gc.llc/">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@vandardgc.llc?lang=en">
            <FaTiktok />
          </a>
        </div>
        <div className="footer-heading footer-2">
          <b>UseFul Links</b>
          <Link to="/">Home</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Gallery">Our Work</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>
        <div className="footer-heading footer-3">
          <b>Information</b>
          <Link to="/ContactUs">
            <FaPhoneAlt />
            202-855-4942
          </Link>
          <Link to="mailto:vandardgeneralcontracting@gmail.com">
            vandardgeneralcontracting@gmail.com
          </Link>
          <a>
            <b>Hours of Operation:</b>
          </a>
          <a>Monday-Sunday | 7:00 am-8:00 pm</a>
          <a>MHIC#</a>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()}&nbsp; Vandard General Contracting
          LLC. | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
