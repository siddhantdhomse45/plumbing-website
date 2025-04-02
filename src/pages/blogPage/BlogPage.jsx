import React, { useState, useEffect } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const BlogPage = () => {
  const [blogPosts1, setBlogPosts] = useState([]); // State to store blog posts
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from data.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Fetch from the public folder
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlogPosts(data.blogPosts1); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display loading state
  if (loading) {
    return <div className="text-center py-16">Loading blog posts...</div>;
  }

  // Display error state
  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/08/plumbing-and-drawings-construction-still-life-2021-08-30-15-35-35-PKSKGRU-a.jpg')",
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-orange-500 font-semibold uppercase">Our Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Latest News & Article
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts1.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <FaUser className="text-orange-500 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <FaCalendarAlt className="text-orange-500 mr-2" />
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-600 mt-3">{post.description}</p>
                <a
                  href={post.link}
                  className="text-orange-500 font-semibold mt-4 inline-block transition-transform duration-300 hover:translate-x-2"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;