import React, { useState, useEffect } from "react";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]); 
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
        setTeamMembers(data.teamMembers); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 
 
  if (loading) {
    return <div className="text-center py-16">Loading team members...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  return (
    <>
    
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/08/smiling-technician-servicing-the-house-heating-sys-2022-03-07-19-09-26-CEYSWA4.jpg')",
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
        </div>
      </div>

   
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-orange-500 text-sm font-bold uppercase">
            Our Team
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            vestibulum arcu. Sed ultricies lectus non vulputate scelerisque.
          </p>
        </div>

        
        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />

             
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-80 text-white text-center p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-orange-400">{member.role}</p>
                <div className="mt-2 flex justify-center space-x-4">
                  <a href="#" className="hover:text-orange-400">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="hover:text-orange-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="hover:text-orange-400">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;