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
      <div className="bg-white py-12 md:mx-10  lg:mx-20 mb-28 ">
        <div className="max-sm:px-4 md:px-0 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
            {/* <div className="relative ">
              <img
                src="https://thepixelcurve.com/html/techwix/techwix/assets/images/shape/about-shape2.png"
                alt="Background"
                className="max-sm:hidden absolute inset-0 md:pl-32 lg:pl-32 object-cover rounded-xl md:transform -translate-y-10"
              />

              <div
                className="relative animationLeft md:ml-5 lg:ml-5"
                ref={addElement}
              >
                <img
                  className="max-sm:w-48 rounded-lg"
                  src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-3.jpg"
                  alt=""
                />
              </div>
              <div
                className=" animationRight absolute max-sm:bottom-8  md:bottom-8 lg:bottom-8 right-0 md:right-6  lg:right-6 transform translate-y-1/4"
                ref={addElement}
              >
                <img
                  className="max-sm:w-48 rounded-lg"
                  src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-4.jpg"
                  alt=""
                />
              </div>
            </div> */}
            <div className="flex justify-center gap-4 ">
              {/* <img
                src="https://thepixelcurve.com/html/techwix/techwix/assets/images/shape/about-shape2.png"
                alt="Background"
                className="max-sm:hidden absolute inset-0 md:pl-32 lg:pl-32 object-cover rounded-xl md:transform -translate-y-10"
              /> */}

              <div
                className="animationLeft md:ml-5 lg:ml-5"
                ref={addElement}
              >
                <img
                  className="max-sm:w-48 rounded-lg"
                  src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-3.jpg"
                  alt=""
                />
              </div>
              <div
                className=" animationRight  max-sm:bottom-8  md:bottom-8 lg:bottom-8 right-0 md:right-6  lg:right-6 transform translate-y-1/4"
                ref={addElement}
              >
                <img
                  className="max-sm:w-48 rounded-lg"
                  src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div
              className="flex flex-col justify-center max-sm:mt-14 md:mt-20 lg:ml-16 animationRight"
              ref={addElement}
            >
              <h3 className="text-sm font-semibold gradient-text uppercase">
                Who We Are
              </h3>
              <h2 className="mt-2 text-3xl font-normal   gradient-text">
                Highly Tailored IT Design, Management & Support Services.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Accelerate innovation with world-class tech teams. We’ll match
                you to an entire remote team or incredible freelance talent for
                all your software development needs.
              </p>
              <hr className="mt-1" />
              <div className="mt-8">
                <h3 className="gradient-text text-md font-bold  ">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-600">
                  Accelerate innovation with world-class tech teams. We help
                  businesses elevate their value.
                </p>
                <h3 className="mt-4 text-md font-bold gradient-text">
                  Custom Code
                </h3>
                <p className="mt-2 text-gray-600">
                  Accelerate innovation with world-class tech teams. We help
                  businesses elevate their value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //end */}
      {/* images */}
      <div className="py-20">
        <div className="title">
          <h2 className="text-center text-3xl font-bold gradient-text  items-center">
            Trusted by Over 6 Million Traders
            <br /> Across 175+ Countries
          </h2>
        </div>
        <div>
          <div className="flex justify-center mt-16">
            <div
              className="w-full lg:w-3/4  grid grid-cols-2 md:grid-cols-4  animationLeft"
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
              className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4  animationRight "
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
      </div>
      {/* end */}
    </div>
  );
}

export default WhoweAre;
