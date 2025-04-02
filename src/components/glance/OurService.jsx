import React, { useEffect, useState } from "react";

const OurService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h4 className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
          Our Services
        </h4>
        <h2 className="text-4xl font-bold mt-2 text-gray-800">
          Professional Plumbing, Friendly Service
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in vestibulum arcu. Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur semper nec in massa.
        </p>

       
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 text-orange-600 text-3xl rounded-md">
                {service.icon}
              </div>

            
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>

              <p className="mt-2 text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;