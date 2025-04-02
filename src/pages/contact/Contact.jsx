import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

function Contact() {
  const position = [51.505, -0.09];

  return (
    <div>
     
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/08/male-plumber-using-wrench-to-fix-leaking-sink-in-h-2021-08-27-08-40-13-C5G6NB2.jpg')",
            filter: 'brightness(30%)',
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact US</h1>
        </div>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        
          <div className="relative bg-cover bg-center rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/07/cheerful-male-plumber-holds-wrench-and-plunger-2021-08-28-02-49-30-JXEAURY.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

            <div className="relative p-10 text-white z-10">
              <h4 className="text-orange-400 font-semibold uppercase text-sm">
                Contact Info
              </h4>
              <h2 className="text-4xl font-bold mt-2">Let's Get In Touch</h2>
              <p className="mt-3 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in vestibulum arcu.
              </p>

              <div className="mt-6 space-y-6">
               
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-orange-400 text-2xl" />
                  <div>
                    <p className="font-semibold">Headquarter</p>
                    <p className="text-gray-300 text-sm">
                      99 Roving St., Big City, PKU 23456
                    </p>
                  </div>
                </div>

          
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-orange-400 text-2xl" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300 text-sm">
                      hello@awesomesite.com
                    </p>
                  </div>
                </div>

            
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-orange-400 text-2xl" />
                  <div>
                    <p className="font-semibold">24/7 Emergency</p>
                    <p className="text-gray-300 text-sm">123-234-1234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-10 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md mt-6 text-lg font-semibold transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="w-full h-[400px]">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Contact;