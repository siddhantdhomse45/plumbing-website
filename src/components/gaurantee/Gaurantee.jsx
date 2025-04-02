import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const Guarantee = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.guarantee))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="relative w-full lg:w-1/2">
        <img
          src={data.image}
          alt="Plumber"
          className="w-full rounded-lg shadow-lg"
        />

        <div className="absolute top-6 left-6  bg-[#1E3A56] text-white px-5 py-3 rounded-lg shadow-lg">
          <span className="text-3xl font-bold text-orange-500">100%</span>
          <p className="text-sm">{data.guaranteeText}</p>
        </div>

        {data.videoUrl && (
          <a
            href={data.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 bg-white flex items-center px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <div className="bg-orange-500 text-white p-3 rounded-full">
              <FaPlay size={16} />
            </div>
            <div className="ml-3">
              <p className="text-orange-500 font-semibold">Watch</p>
              <p className="text-gray-700 font-bold">Video Tour</p>
            </div>
          </a>
        )}
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          {data.title}
        </h2>
        <p className="text-gray-600 mt-4">{data.description}</p>

        <div className="mt-6 space-y-3">
          {data.services.map((service, index) => (
            <p
              key={index}
              className="flex items-center text-gray-800 font-medium"
            >
              <FaCheck className="text-orange-500 mr-3" /> {service}
            </p>
          ))}
        </div>

        <div className="mt-8 flex gap-10">
          {data.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={feature.icon} alt={feature.label} className="w-8 h-8" />
              <p className="text-orange-500 font-semibold">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
