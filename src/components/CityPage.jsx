import React from "react";

import marylandbg from "../pictures/maryland-background.jpg"

const state = "MD"
const services = [
    "Concrete installation",
    "Retaining Walls",
    "Drainage Solution",
    "Excavation",
    "Fencing",
    "Demolition"
  ]
function CityPage({city}) {
  return (
    
    <section className="relative py-24 px-6 bg-white overflow-hidden">  

      <div className="relative max-w-6xl mx-auto text-center text-black">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase tracking-widest border-b-4 border-red-900 inline-block pb-4">
          Construction Services in {city}, {state}
        </h2>

        {/* Description */}
        <p className="text-black max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          We deliver durable, high-performance construction solutions across {city}, {state}. 
          From ground-up builds to precision renovations, our team brings craftsmanship, 
          structural integrity, and disciplined project execution to every job site.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-red-900 border border-red-900 p-6 rounded-md shadow-xl hover:scale-105 transition duration-300 text-left"
            >
              <h3 className="font-bold text-black uppercase text-xs tracking-wide mb-2">
                Service
              </h3>
              <p className="text-white font-semibold text-lg">{service}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-black border border-gray-600 rounded-md p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-4">
            Request a Project Estimate
          </h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Ready to start your project in {city}? Contact our construction team today 
            to schedule a consultation and receive a detailed project quote.
          </p>
          <a
            href="/ContactUs"
            className="inline-block bg-red-900 hover:bg-red-700 text-white font-bold px-10 py-4 uppercase tracking-wider transition duration-300 shadow-lg rounded-xl"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
    
  );
}

export default CityPage;