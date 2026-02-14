import React from "react";
import { motion } from "framer-motion";
import driveway from "../pictures/concrete-8.JPG"
import sidewalk from "../pictures/concrete-6.jpg"
import patio from "../pictures/concrete-5.jpg"
import slab from "../pictures/concrete-9.jpg"
// Reusable ServiceCard Component
export function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border relative">
        {service.popular && (
          <div className="absolute top-4 right-4 bg-black text-white text-xs px-4 py-1 rounded-full z-20">
            Most Popular
          </div>
        )}

        {/* Dominant Image */}
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-sm opacity-90 mt-1">
              Starting at {service.price}
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col">
          <p className="text-slate-600 mb-6">
            {service.description}
          </p>

          <ul className="space-y-1 mb-1" >
            {service.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <span className="text-green-500 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </motion.div>
  );
}

// Services Section (Uses Reusable Card)
export default function ServicesSection({services, columns = 3}) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 ",
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
        <p className="text-slate-600 mt-3 text-lg">
          Choose the perfect solution to add value to your home
        </p>
      </div>

       <div
        className={`grid gap-8 max-w-6xl mx-auto ${
          columnClasses[columns] || columnClasses[3]
        }`}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
