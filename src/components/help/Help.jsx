import React, { useEffect, useState } from "react";
import { FaComments, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const iconMap = {
  FaComments: <FaComments className="text-orange-500 text-5xl mx-auto mb-4" />,
  FaEnvelope: <FaEnvelope className="text-orange-500 text-5xl mx-auto mb-4" />,
  FaQuestionCircle: <FaQuestionCircle className="text-orange-500 text-5xl mx-auto mb-4" />
};

const Help = () => {
  const [supportOptions, setSupportOptions] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => setSupportOptions(data.supportOptions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 font-semibold uppercase">Need Help?</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Don't Hesitate To Contact Us<br />For More Help
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Our support team is available to assist you with any issues, questions, or concerns.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {supportOptions.map((option) => (
          <div key={option.id} className="bg-white text-center p-8 rounded-lg shadow-lg">
            {iconMap[option.icon] || <FaQuestionCircle className="text-orange-500 text-5xl mx-auto mb-4" />}
            <h3 className="text-gray-900 text-xl font-bold">{option.title}</h3>
            <p className="text-gray-600 mt-2">{option.description}</p>
            <a
              href={option.buttonLink}
              className="inline-block mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition"
            >
              {option.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Help;
