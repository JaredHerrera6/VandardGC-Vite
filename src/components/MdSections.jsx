import React from "react";
import marylandbackground from "../pictures/maryland-background.jpg"
// You can also pass cities as props instead of using the default list
const defaultCities = [
  "Baltimore",
  "Annapolis",
  "Columbia",
  "Silver Spring",
  "Rockville",
  "Gaithersburg",
  "Frederick",
  "Towson",
  "Bowie",
  "Ellicott City",
];

const MarylandCitiesSection = ({ cities = defaultCities }) => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
      {/* Maryland Flag Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${marylandbackground})`
        }}
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Cities We Serve in Maryland
        </h2>

        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-gray-200">
          We proudly provide professional construction services across the following cities.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {cities.map((city) => (
            <div
              key={city}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg hover:bg-white/20 transition duration-300"
            >
              <p className="text-sm md:text-lg font-semibold">{city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarylandCitiesSection;
