import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
    
        <h4 className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
          Our Projects
        </h4>
        <h2 className="text-4xl font-bold mt-2 text-gray-800">
          Some Projects We Have Done
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in vestibulum arcu.
          Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
           
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
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
  );
};

export default Projects;