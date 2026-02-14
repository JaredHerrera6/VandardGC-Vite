import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { GiConcreteBag, GiWarpPipe, GiFreemasonry } from "react-icons/gi";
import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import logo from "../pictures/biglogo.jpg";
import { TbBrandTiktok } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
/*function Footer() {
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

export default Footer;*/
export default function Footer() {
  return (
    <footer className="bg-red-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="MySite Logo"
                className="h-30 w-auto rounded-xl"
              />
              <span className="text-xl font-bold text-white">
  
              </span>
            </div>
            <p className="text-sm text-gray-100">
              Quality Construction Services and Solutions
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/Concrete" className="hover:text-white transition">Concrete Installation</Link></li>
              <li><Link to="/Walls" className="hover:text-white transition">Retaining Walls</Link></li>
              <li><Link to="/Drainage" className="hover:text-white transition">Drainage Solutions</Link></li>
              <li><Link to="/Excavation" className="hover:text-white transition">Excavation</Link></li>
              <li><Link to="/Fence" className="hover:text-white transition">Fence Installations</Link></li>
              <li><Link to="/Excavation" className="hover:text-white transition">Demolition</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/Services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/AboutUs" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/ContactUs" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="Gallery" className="hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@vandardgc.llc?lang=en" className="hover:text-white transition">
                <TbBrandTiktok size={20} />
              </a>
              <a href="https://www.instagram.com/vandard.gc.llc/" className="hover:text-white transition">
                <FiInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/people/Vandard-General-Contracting-LLC/61586788749253/" className="hover:text-white transition">
                <LuFacebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Vandard General Contracting LLC. All rights reserved.
        </div>

      </div>
    </footer>
  );
}