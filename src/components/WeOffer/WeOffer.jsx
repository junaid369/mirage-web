import React from "react";
import useIntersectionObserver from "../../components/Observer/Observer";
// import React, { useEffect, useState, useRef } from "react";
import "../../pages/animation.css";
import "../WeOffer/WeOffer.css"

function WeOffer() {
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
      {/* offer products */}

      <section className="bg-gray-200 md:mt-8 ">
        <h5 className="text-center font-semibold gradient-text pt-20">
          WHAT WE OFFER
        </h5>
        <h1 className="gradient-text text-center text-2xl md:text-2xl lg:text-4xl  font-semibold max-sm:mx-5 mt-3 ">
          Unlock Financial Success with Strategic Trading
        </h1>
        {/* <h1 className="text-center   text-2xl md:text-4xl font-semibold">Trading</h1> */}
        <div className="items flex justify-center mt-10 mx-5 md:mx-10 lg:mx-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4  lg:gap-8 ">
            <div
              className="flex flex-col bg-white lg:w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Investment-1.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                In-Depth Market Analysis{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Leverage in-depth market insights to make informed trading decisions.
              </p>
              <div className="flex items-center">
                <button className="btn-hover-gradient mt-3  mx-9 w-28 h-8 text-white font-serif ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white lg:w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Exchange-Rate-3.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Advanced Trading Tools{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Utilize state-of-the-art tools for precision trading and portfolio management.
              </p>
              <div className="flex items-center">
                <button className="btn-hover-gradient mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white lg:w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-conte…oads/sites/11/2024/05/Anonymous-Transaction-4.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Real-Time Data Access{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Stay updated with real-time market data for timely decision-making.
              </p>
              <div className="flex items-center">
                <button className="btn-hover-gradient mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white lg:w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Trading-6.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Risk Management Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Implement effective risk management techniques to protect your investments.
              </p>
              <div className="flex items-center">
                <button className="btn-hover-gradient mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white lg:w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-conte…s/sites/11/2024/05/Market-Trading-Analytics-2.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Educational Resources{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Access a wealth of educational materials to enhance your trading skills
              </p>
              <div className="flex items-center">
                <button className="btn-hover-gradient mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white lg:w-96 h-80 mb-12 shadow-xltransform transition-transform duration-10 hover:scale-105  ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Secure-Trading-5.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                24/7 Support{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Benefit from round-the-clock support to assist you whenever needed.
              </p>
              <div className="flex items-center">
                <button className="btn-hover-gradient mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end */}
      {/* trading */}
      <div
        className="relative h-96 bg-cover bg-center mb-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/businessman-hold-sales-data-economic-growth-graph-chart-business-planning-strategy-analysing-trading-exchange-financial-banking-technology-digital-marketing-profit-growing-plan_150455-10207.jpg?w=1380')",
        }}
      >
        <div className="absolute inset-0  bg-gradient-to-br from-blue-500   to-red-900 opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white  ">
          <div className="">
            <h1
              className="text-4xl md:text-4xl font-bold mb-4 scaleUp "
              ref={addElement}
            >
              Start Trading Today and Unlock Your Financial Potential
            </h1>
            <p
              className="text-lg md:text-sm mb-8 animationRight "
              ref={addElement}
            >
              Begin your trading journey with Mirage Trading and unlock limitless financial opportunities today.
            </p>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default WeOffer;
