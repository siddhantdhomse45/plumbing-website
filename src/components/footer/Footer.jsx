import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C344C] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-2">
              <span className="text-white">Kang</span>
              <span className="text-orange-500">pipa</span>
            </h2>
            <p className="text-gray-300 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Mauris fringilla nisl vel mi imperdiet egestas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-3 space-y-2">
              {["About Us", "Services", "Pricing", "Our Team", "Contact Us"].map((item, index) => (
                <li key={index} className="text-gray-300 hover:text-orange-500 transition duration-300 cursor-pointer">
                  ➤ {item}
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-3 space-y-2">
              {["Privacy Policy", "Terms And Conditions", "Disclaimer", "Support", "FAQ"].map((item, index) => (
                <li key={index} className="text-gray-300 hover:text-orange-500 transition duration-300 cursor-pointer">
                  ➤ {item}
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>99 Roving St., Big City, PKU 23456</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-orange-500" />
                <span>hello@awesomesite.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaPhoneAlt className="text-orange-500" />
                <span>+123-456-789</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
          Copyright 2022 © All Right Reserved | Design by <span className="text-orange-500">Rometheme</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
