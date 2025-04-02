import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import Help from '../../components/help/Help';
import Better from '../../components/better/Better';

function PricingPlanning() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error loading data:", error));
  }, []);

  if (!data) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <>
  
      <div
        className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${data.banner.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {data.banner.title}
          </h1>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 text-center">
        <p className="text-orange-500 font-semibold uppercase tracking-wider">
          Pricing Plans
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          {data.intro.title}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          {data.intro.description}
        </p>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {data.pricingPlans.map((plan) => (
            <div key={plan.id} className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-gray-500 mt-2">{plan.description}</p>
              <div className="text-orange-500 text-4xl font-bold mt-6">
                ${plan.price} <span className="text-lg font-normal text-gray-600">/{plan.duration}</span>
              </div>
              <hr className="my-6 border-gray-200" />
              <ul className="text-gray-700 space-y-3 text-left mx-auto max-w-xs">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-orange-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg mt-6 hover:bg-orange-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Help />
      <Better />
    </>
  );
}

export default PricingPlanning;
