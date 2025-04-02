import React, { useState, useEffect } from "react";
import Better from "../../components/better/Better";
import Glance from "../../components/glance/Glance";
import Expertise from "../../components/expertise/Expertise";
import Testimonial from "../../components/testimonial/Testimonial";

const Service = () => {
  const [services1, setServices] = useState([]); 
  const [heroSection, setHeroSection] = useState({}); 
  const [serviceSection, setServiceSection] = useState({}); 
  const [promoSection, setPromoSection] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setServices(data.services1); 
        setHeroSection(data.heroSection); 
        setServiceSection(data.serviceSection); 
        setPromoSection(data.promoSection); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 

  
  if (loading) {
    return <div className="text-center py-16">Loading services...</div>;
  }

  
  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div
        className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroSection.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {heroSection.title}
          </h1>
        </div>
      </div>

      <Glance />
      <Expertise />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h4 className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
            {serviceSection.subtitle}
          </h4>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">
            {serviceSection.title}
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl">
            {serviceSection.description}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services1.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 text-orange-600 text-3xl rounded-md">
                  {service.icon}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <Testimonial />
      <Better />

      <div className="relative w-full h-[400px] md:h-[450px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${promoSection.backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
          <p className="text-orange-400 uppercase font-semibold tracking-wider">
            {promoSection.subtitle}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            {promoSection.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {promoSection.description}
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            {promoSection.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;