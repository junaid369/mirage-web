import React from "react";
import useIntersectionObserver from "../../components/Observer/Observer";
// import React, { useEffect, useState, useRef } from "react";
import "../../pages/animation.css";


function Abouts() {
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
      {/* details abouts */}
      <section className="details mt-8 lg:flex md:mx-5 lg:mx-24 mb-20">
        <div className="flex max-sm:w-6/6 lg:w-3/6 md:justify-center md:items-center ">
          <img
            src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/two-stock-exchange-traders-getting-profit-in-trading-currency-stock--1536x1022.jpg"
            alt=""
            srcset=""
            className="h-full object-cover"
          />
        </div>
        <div
          className="flex flex-col w-6/6 lg:w-3/6 animationRight"
          ref={addElement}
        >
          {/* <h6 className="max-sm:pl-10  md:pl-10  lg:pl-24  mt-10 gradient-text text-md font-semibold">
            Our Value
          </h6> */}
          <h4 className="gradient-text  md:pl-10 lg:pl-24 mt-3  text-2xl md:text-4xl font-semibold max-sm:text-center md:h-12">
            Why Choose Mirage?
          </h4>
          <p className="max-sm:mx-5  md:pl-10   lg:pl-24 mt-5 text-gray-500">
            Mirage Trading stands out with its unparalleled combination of security, advanced technology, and user-centric design. Our platform offers seamless integration with MetaTrader 4 and 5, real-time data, and a comprehensive suite of trading tools, all within a secure and regulated environment. Committed to excellence, Mirage Trading ensures you have the resources and support needed to navigate the markets confidently and achieve your financial goals.</p>
          <div className="flex ml-10 lg:ml-24 mt-8">
            <div className=" w-1/6 btn-hover-gradient rounded-full max-sm:w-12  max-sm:h-12  md:w-12 md:h-12 lg:w-16 lg:h-16  flex items-center justify-center">
              <i
                aria-hidden="true"
                className="mdi mdi-rocket-launch text-white text-2xl lg:text-4xl"
              ></i>
            </div>
            <div className="mx-5 lg:mx-3 w-2/3 ">
              <h2 className=" text-xl lg:text-2xl gradient-text">Advanced Technology</h2>
              <p className="text-gray-400">
                Benefit from cutting-edge trading tools and real-time data integration with MetaTrader 4 and 5. Enhance your trading strategy with our innovative platform features.
              </p>
            </div>
          </div>
          <div className="flex ml-10 lg:ml-24 mt-8">
            <div className=" w-1/6 btn-hover-gradient rounded-full max-sm:w-12  max-sm:h-12  md:w-12 md:h-12 lg:w-16 lg:h-16  flex items-center justify-center">
              <i
                aria-hidden="true"
                className="mdi mdi-bullseye-arrow text-white text-2xl lg:text-4xl"
              ></i>
            </div>
            <div className="mx-5 lg:mx-3 w-2/3">
              <h2 className="text-xl  lg:text-2xl gradient-text">Dedicated Support</h2>
              <p className="text-gray-400">
                Experience exceptional customer service with round-the-clock support. Our team is always available to assist you with any queries or issues, ensuring a smooth trading experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* end */}

      {/* first arab banner */}
      <section className="bg-gradient-to-br from-blue-500   to-red-900 lg:flex mx-2 md:mx-10 rounded-lg mt-5 mb-20">
        <div
          className="w-4/6  lg:flex flex-col justify-center items-center max-sm:hidden md:hidden  animationLeft"
          ref={addElement}
        >
          <h1 className=" text-white  text-4xl md:text-5xl mx-10 pt-10 font-serif mb-4">
            Start Trading Today and Unlock Your Financial Potential
          </h1>
          <p className=" text-white mt-3 text-lg mx-10">
            Begin trading with Mirage Trading today and unlock your path to financial success. Harness advanced tools and real-time insights to achieve your investment goals.
          </p>
          <button className="mx-10 px-8 mt-4 py-4 bg-gradient-to-br from-blue-500   to-red-900 text-white font-bold rounded-full gradient-border-inner:border-white hover:border-2">
            Start Trading Now!
          </button>
        </div>
        <div className="lg:w-2/6  flex flex-col animationRight" ref={addElement}>
          <img
            className=" hover:-translate-x-20 "
            src="https://www.maleyat.ae/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4gm0l8ni%2Fmaleyat-ae%2Fd21aa3b0393a607307c894d30bc04be02bec8e81-640x493.webp%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-6/6  flex flex-col justify-center items-center lg:hidden">
          <h1 className=" text-white  text-3xl text-center  pt-10 font-bold mb-4">
            Start Trading Today and Unlock Your Financial Potential
          </h1>
          <p className=" text-white mt-3 text-lg mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mb-10 mx-10 px-8 mt-4 py-4   text-white font-bold rounded-full  bg-gradient-to-br from-blue-500   to-red-900 gradient-border-inner:border-white hover:border-2">
            Start Trading Now!
          </button>
        </div>
      </section>

      {/* end */}
    </div>
  );
}

export default Abouts;
