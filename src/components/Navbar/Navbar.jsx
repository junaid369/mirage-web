import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
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
                    src="https://true-blue-movers.s3.amazonaws.com/Mirage.png"
                    // src="/mirage.png"
                    alt="Logo"
                    className="h-36 w-36 mr-2 object-cover"
                  />
                  <span className="font-semibold text-white text-lg">
                    mirage
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex lg:flex items-center space-x-1">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            {/* <div
        className={`md:hidden fixed inset-0 bg-white shadow-lg  overflow-auto overflow-y-auto transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {['Company', 'Platform', 'Products', 'Pages', 'Education'].map((item) => (
            <div key={item}>
              <a
                href="#"
                className="py-4 px-2 gradient-nav hover:text-red-600 font-serif block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
              <div className="ml-4">
                {item === 'Company' && (
                  <>
                    <a href="/aboutUs" className="block py-2 px-4 text-red-900 hover:text-black">About Us</a>
                    <a href="/contactUs" className="block py-2 px-4 text-red-900 hover:text-black">Contact us</a>
                    <a href="/Careers" className="block py-2 px-4 text-red-900 hover:text-black">Careers</a>
                  </>
                )}
                {item === 'Platform' && (
                  <a href="#" className="block py-2 px-4 text-red-900 hover:text-black">Meta Trader 5</a>
                )}
                {item === 'Products' && (
                  <>
                    <a href="#" className="block py-2 px-4 text-red-900 hover:text-black">Forex</a>
                    <a href="#" className="block py-2 px-4 text-red-900 hover:text-black">Indices</a>
                    <a href="#" className="block py-2 px-4 text-red-900 hover:text-black">Shares</a>
                  </>
                )}
                {item === 'Pages' && (
                  <>
                    <a href="/Team" className="block py-2 px-4 text-red-900 hover:text-black">Meet Team</a>
                    <a href="/News" className="block py-2 px-4 text-red-900 hover:text-black">News</a>
                  </>
                )}
                {item === 'Education' && (
                  <a href="#" className="block py-2 px-4 text-red-900 hover:text-black">Market Insights</a>
                )}
              </div>
            </div>
          ))}
          <a
            href="#"
            className="py-2 px-5 text-md text-white btn-hover-gradient rounded-lg block text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            START INVESTING
          </a>
          </div>
          </div> */}

            {/* <div  style={{height:"500px"}}
              className={`md:hidden fixed inset-0 bg-white shadow-lg transition-transform transform  ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col space-y-0 p-5">
                {["Company", "Platform", "Products", "Pages", "Education"].map(
                  (item) => (
                    <div key={item}>
                      <button
                        className="py-4 px-5 gradient-nav hover:text-red-600 font-serif w-full text-left"
                        onClick={() => handleMenuClick(item)}
                      >
                        {item}
                      </button>
                      {activeMenu === item && (
                        <div className="ml-4 space-y-2">
                          {item === "Company" && (
                            <>
                              <a
                                href="/aboutUs"
                                className="block py-2 px-4 text-red-900 hover:text-black"
                              >
                                About Us
                              </a>
                              <a
                                href="/contactUs"
                                className="block py-2 px-4 text-red-900 hover:text-black"
                              >
                                Contact Us
                              </a>
                              <a
                                href="/Careers"
                                className="block py-2 px-4 text-red-900 hover:text-black"
                              >
                                Careers
                              </a>
                            </>
                          )}
                          {item === "Platform" && (
                            <a
                              href="#"
                              className="block py-2 px-4 text-red-900 hover:text-black"
                            >
                              Meta Trader 5
                            </a>
                          )}
                          {item === "Products" && (
                            <>
                              <a
                                href="#"
                                className="block py-2 px-4 text-red-900 hover:text-black"
                              >
                                Forex
                              </a>
                              <a
                                href="#"
                                className="block py-2 px-4 text-red-900 hover:text-black"
                              >
                                Indices
                              </a>
                              <a
                                href="#"
                                className="block py-2 px-4 text-red-900 hover:text-black"
                              >
                                Shares
                              </a>
                            </>
                          )}
                          {item === "Pages" && (
                            <>
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
                            </>
                          )}
                          {item === "Education" && (
                            <a
                              href="#"
                              className="block py-2 px-4 text-red-900 hover:text-black"
                            >
                              Market Insights
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
                <a
                  href="#"
                  className="py-2 px-5 text-md text-white btn-hover-gradient rounded-lg block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  START INVESTING
                </a>
              </div>
            </div> */}


            <div
        style={{ height: "500px" }}
        className={`md:hidden fixed inset-0 bg-white shadow-lg transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col space-y-0 p-5">
          {/* Close Icon */}
          <button
            className="absolute top-10 right-6 text-gray-600 "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Menu Items */}
          {["Company", "Platform", "Products", "Pages", "Education"].map(
            (item) => (
              <div key={item}>
                <button
                  className="py-4 px-5 gradient-nav hover:text-red-600 font-serif w-full text-left"
                  onClick={() => handleMenuClick(item)}
                >
                  {item}
                </button>
                {activeMenu === item && (
                  <div className="ml-4 space-y-2">
                    {item === "Company" && (
                      <>
                        <a
                          href="/aboutUs"
                          className="block py-2 px-4 text-red-900 hover:text-black"
                        >
                          About Us
                        </a>
                        <a
                          href="/contactUs"
                          className="block py-2 px-4 text-red-900 hover:text-black"
                        >
                          Contact Us
                        </a>
                        <a
                          href="/Careers"
                          className="block py-2 px-4 text-red-900 hover:text-black"
                        >
                          Careers
                        </a>
                      </>
                    )}
                    {item === "Platform" && (
                      <a
                        href="#"
                        className="block py-2 px-4 text-red-900 hover:text-black"
                      >
                        Meta Trader 5
                      </a>
                    )}
                    {item === "Products" && (
                      <>
                        <a
                          href="#"
                          className="block py-2 px-4 text-red-900 hover:text-black"
                        >
                          Forex
                        </a>
                        <a
                          href="#"
                          className="block py-2 px-4 text-red-900 hover:text-black"
                        >
                          Indices
                        </a>
                        <a
                          href="#"
                          className="block py-2 px-4 text-red-900 hover:text-black"
                        >
                          Shares
                        </a>
                      </>
                    )}
                    {item === "Pages" && (
                      <>
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
                      </>
                    )}
                    {item === "Education" && (
                      <a
                        href="#"
                        className="block py-2 px-4 text-red-900 hover:text-black"
                      >
                        Market Insights
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          )}
          <a
            href="#"
            className="py-2 px-5 text-md text-white btn-hover-gradient rounded-lg block text-center mt-4"
          >
            START INVESTING
          </a>
        </div>
      </div>


            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
