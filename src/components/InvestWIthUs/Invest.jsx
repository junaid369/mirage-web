import React from "react";
import useIntersectionObserver from "../../components/Observer/Observer";
// import React, { useEffect, useState, useRef } from "react";
import "../../pages/animation.css";
import "../InvestWIthUs/Invest.css"
import CountUp from "react-countup";
const Counter = ({ end, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <CountUp start={0} end={end} duration={2.75} delay={0}>
        {({ countUpRef }) => (
          <div className="text-4xl font-bold gradient-text">
            <span ref={countUpRef} />+
          </div>
        )}
      </CountUp>
      <div className="text-gray-500 mt-2">{label}</div>
    </div>
  );
};
const StarRating = ({ rating }) => {
    // Calculate full stars and half stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    // Create an array for star icons
    const starsArray = [];
    for (let i = 0; i < fullStars; i++) {
      starsArray.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }
    if (hasHalfStar) {
      starsArray.push(
        <span key="half" className="text-yellow-400">
          ½
        </span>
      );
    }
    const remainingStars = 5 - starsArray.length;
    for (let i = 0; i < remainingStars; i++) {
      starsArray.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }
  
    return (
      <div className="flex items-center">
        <p className="text-xl font-semibold mr-2">{rating}</p>
        <div className="flex">
          {starsArray.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
      </div>
    );
  };
function Invest() {
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
      {/* why invets */}

      <section className="invest mt-8  mx-3 md:mx-3  lg:mx-36 mb-20">
        <h1
          className="text-center text-white-500  text-5xl font-serif topToBottom"
          ref={addElement}
        >
          Why <span className="gradient-text">Invest</span> With Us?
        </h1>
        <div className="grid grid-cols-1 gap-2  md:grid-cols-2 md:gap-3 lg:gap-12 mt-9  ">
          <div
            className="flex justify-center items-center     bg-gradient-to-br from-blue-500   to-red-900  h-28  rounded-2xl transform transition-transform duration-10 hover:scale-105 animationLeft"
            ref={addElement}
          >
            
            <img
              className="h-20 w-20 "
              src="https://multibankfx.com/_next/image?url=%2Flps%2Fstatic%2Finvest-with-us%2Fglobal-shares.png&w=96&q=75"
              alt=""
            />
            <p className="text-white px-5">20,000 + Global Shares</p>
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-br from-blue-500   to-red-900  h-28 rounded-2xl   transform transition-transform duration-10 hover:scale-105 animationLeft"
            ref={addElement}
          >
            <img
              className="h-20 w-20"
              src="https://multibankfx.com/_next/image?url=%2Flps%2Fstatic%2Finvest-with-us%2Fleverage500.png&w=96&q=75"
              alt=""
            />
            <p className="text-white px-5">Leverage 1:500</p>
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-br from-blue-500   to-red-900  h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105 animationLeft"
            ref={addElement}
          >
            <img
              className="h-20 w-20"
              src="https://multibankfx.com/_next/image?url=%2Flps%2Fstatic%2Finvest-with-us%2Fcommission.png&w=96&q=75"
              alt=""
            />
            <p className="text-white px-5">Zero Commission</p>
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-br from-blue-500   to-red-900 h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105 animationRight"
            ref={addElement}
          >
            <img
              className="h-20 w-20"
              src="https://multibankfx.com/_next/image?url=%2Flps%2Fstatic%2Finvest-with-us%2Fdeposit.png&w=96&q=75"
              alt=""
            />
            <p className="text-white px-5">Fast Deposit and Withdrawals</p>
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-br from-blue-500   to-red-900  h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105  animationRight"
            ref={addElement}
          >
            <img
              className="h-20 w-20"
              src="https://multibankfx.com/_next/image?url=%2Flps%2Fstatic%2Finvest-with-us%2Fcustomer-support.png&w=96&q=75"
              alt=""
            />
            <p className="text-white px-5">24/7 Customer Support</p>
          </div>
          <div
            className="flex justify-center items-center bg-gradient-to-br from-blue-500   to-red-900  h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105  animationRight"
            ref={addElement}
          >
            <img
              className="h-20 w-20"
              src="	https://multibankfx.com/_next/image?url=%2Flps%2Fstatic%2Finvest-with-us%2Ffunding.png&w=96&q=75"
              alt=""
            />
            <p className="text-white px-5">Various Funding Methods</p>
          </div>
        </div>
      </section>
      {/* end */}

      {/* counter */}
      <div className="bg-white mt-3  py-8 shadow-md max-sm:border-2">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2  lg:grid-cols-4 gap-4">
          <Counter end={27} label="Years of Experience" />
          <Counter end={29000} label="Project Done" />
          <Counter end={279} label="Expert Team" />
          <Counter end={539000} label="Happy Client" />
        </div>
      </div>
    </div>
  );
}

export default Invest;
