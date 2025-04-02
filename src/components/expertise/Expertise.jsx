import React, { useEffect, useState } from "react";

const Expertise = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.expertise)) 
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="bg-[#0D2538] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-orange-500 uppercase text-sm font-semibold tracking-wide">
          {data.sectionTitle}
        </h3>
        <h2 className="text-4xl font-bold mt-2 leading-tight">{data.mainTitle}</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">{data.description}</p>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
          {data.buttonText}
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-black transform transition duration-300 hover:scale-105">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
