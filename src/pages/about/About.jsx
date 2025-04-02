import React from 'react';
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import Expertise from '../../components/expertise/Expertise';
import Better from '../../components/better/Better';
import Glance from '../../components/glance/Glance';

const  About= () => {
  return (
    <>
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/08/man-choosing-pipes-in-the-plumbing-shop-2022-02-05-02-21-44-T555FK2.jpg')" }} >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative z-10 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
        
      </div>
    </div>
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
      
      <div className="relative w-full lg:w-1/2">
        <img
          src="https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/plumber-in-uniform-changes-faucet-in-the-kitchen-2021-08-28-02-49-27-8YY2ZB5.jpg"
          alt="Plumber"
          className="w-full rounded-lg shadow-lg"
        />

       
        <div className="absolute top-6 left-6 bg-[#1E3A56] text-white px-5 py-3 rounded-lg shadow-lg">
          <span className="text-3xl font-bold text-orange-500">100%</span>
          <p className="text-sm">Satisfaction Guarantee</p>
        </div>

       
        <div className="absolute bottom-6 left-6 bg-white flex items-center px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition">
          <div className="bg-orange-500 text-white p-3 rounded-full">
            <FaPlay size={16} />
          </div>
          <div className="ml-3">
            <p className="text-orange-500 font-semibold">Watch</p>
            <p className="text-gray-700 font-bold">Video-Tour</p>
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2">
        <h4 className="text-orange-500 uppercase text-sm font-semibold tracking-wider mb-2">
          Who We Are
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          The Priceless Service <br /> You Can Afford And Trust.
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in vestibulum arcu.
          Sed ultricies lectus non vulputate scelerisque. Morbi eu nisl quis massa efficitur.
        </p>

      
        <div className="mt-6 space-y-3">
          <p className="flex items-center text-gray-800 font-medium">
            <FaCheck className="text-orange-500 mr-3" /> 24/7 Emergency Plumbing Service
          </p>
          <p className="flex items-center text-gray-800 font-medium">
            <FaCheck className="text-orange-500 mr-3" /> General Plumbing Maintenance
          </p>
        </div>

        
        <div className="mt-8 flex gap-10">
          <div className="flex items-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2331/2331949.png" alt="pricing" className="w-8 h-8" />
            <p className="text-orange-500 font-semibold">Affordable Pricing</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2920/2920314.png" alt="experts" className="w-8 h-8" />
            <p className="text-orange-500 font-semibold">Plumbing Experts</p>
          </div>
        </div>
      </div>
    </section>
    <Expertise />
    <Better />
    <Glance />
    </>
  );
};
export default About;