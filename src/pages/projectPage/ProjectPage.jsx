import React, { useEffect, useState } from "react";
import Help from "../../components/help/Help";

const ProjectPage = () => {
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
            backgroundImage: `url(${data.banner.backgroundImage})`,
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{data.banner1.title}</h1>
        </div>
      </div>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <h4 className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
            {data.intro1.sectionTitle}
          </h4>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">{data.intro1.mainTitle}</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{data.intro1.description}</p>

        
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.projects1.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                  <p className="text-lg font-semibold">{project.alt}</p>
                  <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Help />
    </>
  );
};

export default ProjectPage;
