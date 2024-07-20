import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 shadow-lg fixed top-0 w-screen z-10">
        {/* <nav className="bg-white shadow-lg fixed top-0 w-screen z-10"> */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <div className="flex space-x-7">
              <div>
                <a href="/" className="flex items-center py-4 px-2">
                  <img
                    src="/path/to/logo.png"
                    alt="Logo"
                    className="h-8 w-8 mr-2"
                  />
                  <span className="font-semibold text-white text-lg">
                    Finavest
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 text-white hover:text-teal-400 transition duration-300"
                >
                  Company
                </a>
                <div className="absolute hidden group-hover:block bg-gray-700 shadow-lg mt-1 rounded w-48">
                  <a
                    href="/aboutUs"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    About Us
                  </a>
                  <a
                    href="/contactUs"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Contact us
                  </a>
                  <a
                    href="/Careers"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Careers
                  </a>
                </div>
              </div>
              {/* <a href="#" className="py-4 px-2 text-white hover:text-teal-400 transition duration-300">About Us</a> */}
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 text-white hover:text-teal-400 transition duration-300"
                >
                  Platform
                </a>
                <div className="absolute hidden group-hover:block bg-gray-700 shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Meta Trader 5
                  </a>
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">Service 2</a>
            <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">Service 3</a> */}
                </div>
              </div>
              {/* <a href="#" className="py-4 px-2 text-white hover:text-teal-400 transition duration-300">Product</a> */}
              {/* <a href="#" className="py-4 px-2 text-white hover:text-teal-400 transition duration-300">Contact Us</a> */}
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 text-white hover:text-teal-400 transition duration-300"
                >
                  Products
                </a>
                <div className="absolute hidden group-hover:block bg-gray-700 shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Forex
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Indices
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Shares
                  </a>
                </div>
              </div>
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 text-white hover:text-teal-400 transition duration-300"
                >
                  Pages
                </a>
                <div className="absolute hidden group-hover:block bg-gray-700 shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Meet Team
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    News
                  </a>
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">Page 3</a> */}
                </div>
              </div>
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 text-white hover:text-teal-400 transition duration-300"
                >
                  Education
                </a>
                <div className="absolute hidden group-hover:block bg-gray-700 shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4 text-white hover:text-teal-400"
                  >
                    Market Insights
                  </a>
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">News</a> */}
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">Page 3</a> */}
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#"
                className="py-2 px-5 text-md font-serif text-white bg-teal-800 rounded hover:bg-teal-900 transition duration-300"
              >
                START INVESTING
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
