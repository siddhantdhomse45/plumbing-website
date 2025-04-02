import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Better = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { sectionTitle, mainTitle, description, benefits, features } = data.better;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-1/2">
        <h4 className="text-orange-500 uppercase text-sm font-semibold tracking-wider mb-2">
          {sectionTitle}
        </h4>
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">{mainTitle}</h2>
        <p className="text-gray-600 mt-4">{description}</p>
        <div className="mt-6 space-y-3">
          {benefits.map((benefit, index) => (
            <p key={index} className="flex items-center text-gray-800 font-medium">
              <FaCheck className="text-orange-500 mr-3" /> {benefit}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="text-orange-500 text-4xl">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Better;
