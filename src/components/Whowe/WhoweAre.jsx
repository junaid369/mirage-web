import React from "react";
import useIntersectionObserver from "../../components/Observer/Observer";
// import React, { useEffect, useState, useRef } from "react";
import "../../pages/animation.css";


function WhoweAre() {
  const addElement = useIntersectionObserver(
    (element) => {
      if (element.classList.contains("animationLeft")) {
        element.classList.add("animation"); // Add animate class when element is in view
      } else if (element.classList.contains("animationRight")) {
        element.classList.add("animation-slide-in-right"); // Add animate class when element is in view
      } else if (element.classList.contains("topToBottom")) {
        element.classList.add("animation-slideInTop"); // Add animate class when element is in view
      } else if (element.classList.contains("bottomToTop")) {
        element.classList.add("animation-slideInBottom"); // Add animate class when element is in view
      } else if (element.classList.contains("scaleUp")) {
        element.classList.add("animation-scaleUp"); // Add animate class when element is in view
      } else if (element.classList.contains("ZoomInOut")) {
        element.classList.add("animation-ZoomInOut"); // Add animate class when element is in view
      }
    },
    { threshold: 0.1 }
  );
  return (
    <div>
      {/* about us */}
      <div className="flex  max-sm:flex-col-reverse  items-center  bg-white  mt-24 ">
        <div
          className="md:w-3/6 flex flex-col items-center  mb-8 max-sm:mx-2 topToBottom"
          ref={addElement}
        >
          <img
            src="https://img.freepik.com/free-photo/attractive-young-freelance-trader-using-laptop-trading-while-working-from-home_662251-802.jpg?t=st=1721139371~exp=1721142971~hmac=0c13eb8ece14787046a8fc1c3b14faa5eacc9d3a3b828cf1a7ee4fd99e7490d0&w=740"
            alt="Traders"
            className="mb-4  rounded-md h-96 object-fill"
          />
        </div>
        <div
          className="w-6/6 md:w-3/6 flex flex-col   mx-3 md:items-start  mb-8 animationRight"
          ref={addElement}
        >
          <div className="max-sm:flex flex-col items-center">
            <h6 className="text-md text-teal-500 font-semibold animationRight">
              Who We Are
            </h6>
            <h2 className=" text-xl md:text-3xl font-bold animationRight mt-3">
              Leading the Way in Global Trading
            </h2>
          </div>
          <p className="mt-4 items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <ul className="mt-4 space-y-2 ">
            <li className="flex items-center">
              <i
                className="mdi mdi-check text-blue-500 mr-2"
                aria-hidden="true"
              ></i>
              <span>Deep Assets Details</span>
            </li>
            <li className="flex items-center">
              <i
                className="mdi mdi-check text-blue-500 mr-2"
                aria-hidden="true"
              ></i>
              <span>Dynamic Portfolio Tracking</span>
            </li>
            <li className="flex items-center">
              <i
                className="mdi mdi-check text-blue-500 mr-2"
                aria-hidden="true"
              ></i>
              <span>Smart Notifications</span>
            </li>
            <li className="flex items-center">
              <i
                className="mdi mdi-check text-blue-500 mr-2"
                aria-hidden="true"
              ></i>
              <span>Multi Asset Tracking</span>
            </li>
          </ul>

          <a
            href="#"
            className="animation-slideInTop  max-sm:w-3/6 mt-6 bg-teal-900 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            More About Us
          </a>
        </div>
      </div>
      {/* //end */}
      {/* images */}
      <div className="py-20">
        <div className="title">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Trusted by Over 6 Million Traders
          </h2>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Across 175+ Countries
          </h2>
        </div>
        <div className="flex justify-center mt-16">
          <div
            className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4  animationLeft"
            ref={addElement}
          >
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/muzica.png"
                alt="muzica"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/goldline.png"
                alt="goldline"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/fox-hub.png"
                alt="fox hub"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/earth-2.0.png"
                alt="earth 2.0"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="max-sm:hidden flex justify-center mt-3">
          <div
            className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4  animationRight "
            ref={addElement}
          >
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/ideaa.png"
                alt="ideaa"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/kanba.png"
                alt="kanba"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/nirastate.png"
                alt="nirastate"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/solaytic.png"
                alt="solaytic"
                className="h-11 mb-3 transform transition-transform duration-10 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default WhoweAre;
