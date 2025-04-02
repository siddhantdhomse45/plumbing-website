import React, { useEffect, useState } from "react";
import { FaPlay, FaCheck } from "react-icons/fa";

const ServiceDetails = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServiceData(data.serviceDetails))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!serviceData) return <p>Loading...</p>;

  return (
    <>
      <div
        className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceData.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {serviceData.hero.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          <div className="relative">
            <img
              src={serviceData.serviceOverview.image}
              alt={serviceData.serviceOverview.title}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition">
                <FaPlay className="text-xl" />
              </button>
            </div>
          </div>

    
          <div>
            <p className="text-orange-400 uppercase font-semibold tracking-wider mb-2">
              Service Overview
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {serviceData.serviceOverview.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {serviceData.serviceOverview.description}
            </p>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
     
        <div className="lg:col-span-2">
          {serviceData.detailedDescription.paragraphs.map((para, index) => (
            <p key={index} className="text-gray-600 text-lg leading-relaxed mb-4">
              {para}
            </p>
          ))}

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.detailedDescription.features.map((feature, index) => (
              <ul key={index} className="space-y-3">
                <li className="flex items-center text-gray-800 font-semibold">
                  <FaCheck className="text-orange-500 mr-2" /> {feature}
                </li>
              </ul>
            ))}
          </div>
        </div>

       
        <div className="space-y-6">
          
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-gray-900 text-xl font-bold mb-4">Other Services</h3>
            <ul className="space-y-3">
              {serviceData.otherServices.map((service, index) => (
                <li key={index} className="flex items-center text-gray-800 font-semibold">
                  <FaCheck className="text-orange-500 mr-2" /> {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">Need Any Help?</h3>
            <p className="text-gray-300 mb-4">
              Contact us for more information about our services.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded transition">
              Contact Us
            </button>
          </div>

        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[450px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceData.promo.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-white text-center">
          <p className="text-orange-400 uppercase font-semibold tracking-wider">
            Promo
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            {serviceData.promo.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {serviceData.promo.description}
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            Claim Promo
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
