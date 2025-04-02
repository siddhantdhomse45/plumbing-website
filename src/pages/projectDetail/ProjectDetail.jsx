import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaClipboardList,
  FaMapMarkerAlt,
  FaCheck,
  FaPlay,
} from "react-icons/fa";

const ProjectDetail = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
   
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.banner2.backgroundImage})`,
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{data.banner2.title}</h1>
        </div>
      </div>

      
      <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.project.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{data.project.description}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-12">
          <div className="relative w-full md:w-1/2">
            <img
              src={data.project.mainImage}
              alt={data.project.title}
              className="rounded-lg shadow-lg w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
                <FaPlay className="text-xl" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-gray-600 leading-relaxed">{data.project.content.paragraph1}</p>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <img
                src={data.project.contentImage}
                alt="Project"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <div>
                <p className="text-gray-600 leading-relaxed">{data.project.content.paragraph2}</p>
                <ul className="mt-4 space-y-3">
                  {data.project.checklist.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-800 font-semibold">
                      <FaCheck className="text-orange-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaUser className="text-orange-500 text-xl" />
              <div>
                <h4 className="text-gray-900 font-bold">Client</h4>
                <p className="text-gray-600">{data.project.details.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-orange-500 text-xl" />
              <div>
                <h4 className="text-gray-900 font-bold">Date</h4>
                <p className="text-gray-600">{data.project.details.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaClipboardList className="text-orange-500 text-xl" />
              <div>
                <h4 className="text-gray-900 font-bold">Category</h4>
                <p className="text-gray-600">{data.project.details.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <div>
                <h4 className="text-gray-900 font-bold">Location</h4>
                <p className="text-gray-600">{data.project.details.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
