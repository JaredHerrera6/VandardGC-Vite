import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  phoneNumber,
  height = "85vh",
}) => {
  return ( 
    <header
      style={{ height }}
      className=" relative w-full flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200 italic">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-2xl shadow-xl transition"
            onClick={() => window.location.href = "/ContactUs"}
          >
            Free Estimate
          </button>

          <a href={`tel:${phoneNumber}`}>
            <button
              className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-4 text-lg rounded-2xl shadow-xl transition"
            >
              Call {phoneNumber}
            </button>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default PageHeader;