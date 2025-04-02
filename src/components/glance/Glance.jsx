import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Glance = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setStats(data.stats));
  }, []);

  return (
    <section className="relative py-16 bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/map.png')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 text-center">
        {/* Title Section */}
        <h4 className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
          Kangpipa At Glance
        </h4>
        <h2 className="text-4xl font-bold mt-2 text-gray-800">
          We Take Care Of All Your <br /> Plumbing Needs
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in vestibulum arcu.
          Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur.
        </p>

        {/* Statistics Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-bold text-orange-500">
                <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                {stat.suffix}
              </h3>
              <p className="mt-1 text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glance;
