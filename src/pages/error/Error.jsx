import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center text-white" 
         style={{ backgroundImage: "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/08/man-choosing-pipes-in-the-plumbing-shop-2022-02-05-02-21-44-T555FK2-a.jpg')" }}> 
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      
      {/* Content */}
      <div className="relative text-center max-w-2xl mx-auto">
        <h1 className="text-8xl font-bold text-orange-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">We Couldn't Find The Page You Are Looking For</h2>
        <p className="mt-4 text-lg">
          Curabitur bibendum mattis ex. Praesent at sagittis magna, at egestas orci.
          Phasellus malesuada iaculis interdum.
        </p>
        
        {/* Back to Home Button */}
        <Link to="/" className="mt-6 inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
