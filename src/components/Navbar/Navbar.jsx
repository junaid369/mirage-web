import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-lg fixed top-0 w-screen z-10">
        {/* <nav className="bg-teal-800 shadow-lg fixed top-0 w-screen z-10"> */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <div className="flex space-x-7">
              <div>
                <a href="/" className="flex items-center py-4 px-0">
                  <img
                    src="/mirage.png"
                    alt="Logo"
                    className="h-36 w-36 mr-2 object-cover"
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
                  className="py-4 px-2  gradient-nav  hover:text-red-600 font-serif"
                >
                  Company
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded w-48">
                  <a
                    href="/aboutUs"
                    className="block py-2 px-4 text-red-900 hover:text-black"
                  >
                    About Us
                  </a>
                  <a
                    href="/contactUs"
                    className="block py-2 px-4  text-red-900 hover:text-black"
                  >
                    Contact us
                  </a>
                  <a
                    href="/Careers"
                    className="block py-2 px-4  text-red-900 hover:text-black"
                  >
                    Careers
                  </a>
                </div>
              </div>
              {/* <a href="#" className="py-4 px-2 text-white hover:text-teal-400 transition duration-300">About Us</a> */}
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 gradient-nav    hover:text-red-600 font-serif"
                >
                  Platform
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4  text-red-900 hover:text-black"
                  >
                    Meta Trader 5
                  </a>
                </div>
              </div>

              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 gradient-nav   font-serif hover:text-red-600 transition duration-300"
                >
                  Products
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4 text-red-900 hover:text-black"
                  >
                    Forex
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4  text-red-900 hover:text-black"
                  >
                    Indices
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4  text-red-900 hover:text-black"
                  >
                    Shares
                  </a>
                </div>
              </div>
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 gradient-nav   font-serif hover:text-red-600 transition duration-300"
                >
                  Pages
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded w-48">
                  <a
                    href="/Team"
                    className="block py-2 px-4 text-red-900 hover:text-black"
                  >
                    Meet Team
                  </a>
                  <a
                    href="/News"
                    className="block py-2 px-4 text-red-900 hover:text-black"
                  >
                    News
                  </a>
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">Page 3</a> */}
                </div>
              </div>
              <div className="group relative">
                <a
                  href="#"
                  className="py-4 px-2 gradient-nav   font-serif hover:text-red-600 transition duration-300"
                >
                  Education
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded w-48">
                  <a
                    href="#"
                    className="block py-2 px-4  text-red-900 hover:text-black"
                  >
                    Market Insights
                  </a>
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">News</a> */}
                  {/* <a href="#" className="block py-2 px-4 text-white hover:text-teal-400">Page 3</a> */}
                </div>
              </div>
            </div>
            <button className="hidden md:flex items-center space-x-3 btn-hover-gradient rounded-lg hover: transition duration-300">
              <a href="#" className="py-2 px-5 text-md    text-white   ">
                START INVESTING
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
