import React, { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => setBlogPosts(data.blogPosts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 font-semibold uppercase">Our Blog</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Latest News & Articles
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay updated with the latest plumbing tips, industry trends, and expert advice.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
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
  );
};

export default Blog;
