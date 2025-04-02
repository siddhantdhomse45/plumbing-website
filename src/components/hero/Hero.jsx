import React, { useState, useEffect } from "react";

const backgroundImages = [
  "http://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/male-plumber-in-uniform-installing-drain-pipe-2021-08-28-02-49-31-JF85MSE.jpg",
  "http://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/closeup-of-plumber-using-screwdriver-while-install-2022-03-09-03-07-35-FPHFCTH.jpg",
  "https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/male-plumber-hands-repairing-pipe-under-sink-2022-03-24-16-02-46-T8E3TZP-800x533.jpg",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images with Fade Animation */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ready To Handle Any
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-orange-400 mb-6">
          Plumbing Emergency
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-8">
          Any Time.
        </h3>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in vestibulum arcu. Sed ultricies lectus non vulputate scelerisque. Morbi eu nisi quis massa efficitur semper nec in massa.
        </p>
        
        {/* CTA Buttons */}
        <div className="space-x-4">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
