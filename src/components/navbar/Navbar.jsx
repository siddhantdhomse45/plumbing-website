import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();


  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://mhkit.rometheme.pro/kangpipa/wp-content/uploads/sites/9/2022/08/logo.png"
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>

          
          <div className="hidden md:flex md:space-x-8 md:flex-1 md:justify-center">
            <NavLink to="/" className={`text-gray-800 hover:text-gray-600 ${location.pathname === "/" ? "font-bold text-orange-500" : ""}`}>
              Home
            </NavLink>

            <NavLink to="/about" className={`text-gray-800 hover:text-gray-600 ${location.pathname === "/about" ? "font-bold text-orange-500" : ""}`}>
              About
            </NavLink>

         
            <div className="relative group">
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                Services 
              </button>
              
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <NavLink to="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Services 
                </NavLink>
                <NavLink to="/services/details" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Services Details
                </NavLink>
                <NavLink to="/services/price" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                 Princing Planning
                </NavLink>
               
              </div>
            </div>

         
            <div className="relative group">
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                Projects 
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <NavLink to="/projects" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                 Projects
                </NavLink>
                <NavLink to="/projects/projects-details" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                 Projects Details
                </NavLink>
               
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
              Pages
              </button>
              
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              
                <NavLink to="/pages/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Team
                </NavLink>
                <NavLink to="/pages/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Blog
                </NavLink>
                <NavLink to="/pages/single" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Single-Post
                </NavLink>
                <NavLink to="/pages/error" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Error
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className={`text-gray-800 hover:text-gray-600 ${location.pathname === "/contact" ? "font-bold text-orange-500" : ""}`}>
              Contact
            </NavLink>
          </div>

          <div className="hidden md:block">
            <NavLink to="/appointment" className={`bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition ${location.pathname === "/appointment" ? "font-bold text-orange-500" : ""}`}>
              Appointment
            </NavLink>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <NavLink to="/" className="block text-gray-800 hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className="block text-gray-800 hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>
              About
            </NavLink>

            {/* Mobile Dropdown - Services */}
            <div>
              <button className="w-full text-left text-gray-800 py-2" onClick={() => toggleDropdown("services")}>
                Services 
              </button>
              {dropdown === "services" && (
                <div className="pl-4">
                  <NavLink to="/services/details" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                  Services Details
                  </NavLink>
                  <NavLink to="/services/princing" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                  Pricing Plans
                  </NavLink>
                 
                </div>
              )}
            </div>

            {/* Mobile Dropdown - Projects */}
            <div>
              <button className="w-full text-left text-gray-800 py-2" onClick={() => toggleDropdown("projects")}>
                Projects 
              </button>
              {dropdown === "projects" && (
                <div className="pl-4">
                  <NavLink to="/projects" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                    Projects
                  </NavLink>
                  <NavLink to="/projects/projects-details" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                   Project Details
                  </NavLink>
                  
                </div>
              )}
            </div>

            <div>
              <button className="w-full text-left text-gray-800 py-2" onClick={() => toggleDropdown("pages")}>
               Pages
              </button>
              {dropdown === "pages" && (
                <div className="pl-4">
                  <NavLink to="/pages/team" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                   Team
                  </NavLink>
                  <NavLink to="/pages/blog" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                  Blog
                  </NavLink>
                  <NavLink to="/pages/single" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                 Single-Post
                  </NavLink>
                  <NavLink to="/pages/error" className="block py-1 text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                 Error 
                  </NavLink>
                </div>
              )}
            </div>


            <NavLink to="/contact" className="block text-gray-800 hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
