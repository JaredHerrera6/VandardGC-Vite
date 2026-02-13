import React from "react";
import { href, Link } from "react-router-dom";
import logo from "../pictures/favicon256.png";
import logo2 from "../pictures/Vandardfavicon2.PNG";
import biglogo from "../pictures/biglogo.jpg";
import VandardIcon from "./VandardIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactUs from "../routes/ContactUs.jsx"
import "../App.css"
/*function Navbar() {
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
*/



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact Us", href: "ContactUs" },
    { name:"Our Work", href:"/Gallery"}
  ];
  const mobileLinks =[
    { name:"Home", href:"/Home"},
    { name:"Services", href:"/Services"},
    { name:"Concrete Installations", href:'/Concrete'},
    { name:"Retaining Walls", href:"/Walls"},
    { name:"Drainage Solutions", href: "/Drainage"},
    { name:"Excavation", href:"/Excavation"},
    { name: "Fence Installation", href:"/Fence" },
    { name: "Demolition", href:"/Excavation"},
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact Us", href: "ContactUs" },
    { name:"Our Work", href:"/Gallery"}
  ]

  const services =[
    { name:"Concrete Installation", href:"/Concrete" },
    { name:"Retaining Walls", href:"/Walls" },
    { name:"Drainage Solutions", href:"/Drainage" },
    { name:"Excavation", href:"/Excavation" },
    { name:"Fence Installation", href:"/Fence" } ,
    { name:"Demoliton", href:"/Excavation"}

  ]
  return (
    <nav className="w-full bg-red-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link className="flex items-center gap-3 " to='/'>
          <img
            src={biglogo}   // <-- replace with your logo path
            alt="MySite Logo"
            className="h-30 w-auto object-contain rounded-xl "
          />
        </Link>

        {/* Desktop Nav + Button */}

        <div className="hidden md:flex items-center gap-8">

          <ul className="flex gap-8 text-xl font-semibold">

            {/* Home Nav Button */}
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <a href="Services">
              <button className="flex  items-center gap-1 hover:text-white transition">
                Services <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <ul className="py-2">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg text-red-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              </a>
            </li>
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            

          </ul>

          {/* CTA Button */}
          <motion.a
            href={ContactUs}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-red-900 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-red-950 transition"
          >
            Call Us Today!
          </motion.a>
        </div>

        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-xl font-semibold">
              {mobileLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-red-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
