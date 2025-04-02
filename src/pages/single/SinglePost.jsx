import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null); 
  const [latestPosts, setLatestPosts] = useState([]); 
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
        setSinglePost(data.singlePost);
        setLatestPosts(data.latestPosts); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 
  if (loading) {
    return <div className="text-center py-16">Loading post...</div>;
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
            backgroundImage: `url(${singlePost.heroImage})`,
            filter: "brightness(30%)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{singlePost.title}</h1>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
         
          <div className="col-span-2">
            <img
              src={singlePost.mainImage}
              alt={singlePost.title}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Post</h2>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <div key={post.id} className="flex items-center space-x-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-16 rounded-lg object-cover"
                  />
                  <p className="text-gray-800 text-sm font-semibold">{post.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="md:col-span-2">
              {singlePost.content.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mt-4">
                  {paragraph}
                </p>
              ))}

      
              <div className="flex flex-col md:flex-row items-start mt-6 space-x-6">
                <img
                  src={singlePost.content.sideImage}
                  alt="Plumber"
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
                <div className="space-y-3 mt-4 md:mt-0">
                  {singlePost.content.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-orange-500 w-5 h-5 mr-2" />
                      <p className="text-gray-800 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-900 relative rounded-lg p-6 text-white flex flex-col items-start">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${singlePost.helpBox.backgroundImage})`,
                  opacity: 0.2,
                }}
              />
              <h2 className="text-xl font-bold relative z-10">{singlePost.helpBox.title}</h2>
              <p className="text-sm mt-2 relative z-10">{singlePost.helpBox.description}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg relative z-10">
                {singlePost.helpBox.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;