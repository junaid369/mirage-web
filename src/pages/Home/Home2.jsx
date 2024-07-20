import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import "./Home.css";
import axios from "axios";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "../../pages/animation.css";
import useIntersectionObserver from "../../components/Observer/Observer";
const Counter = ({ end, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <CountUp start={0} end={end} duration={2.75} delay={0}>
        {({ countUpRef }) => (
          <div className="text-4xl font-bold text-teal-500">
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
function Home() {
  const [stocks, setStocks] = useState([]);
  const [news, setNews] = useState([]);
  // Hook to add animate class when element is in view

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to top on refresh
  // }, []);
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

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await axios.get(
        "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cqb5dn9r01qmfd85t0ogcqb5dn9r01qmfd85t0p0"
      );
      const topStocks = response.data.slice(0, 30).map((stock) => ({
        ...stock,
        price: (Math.random() * 100).toFixed(2), // Mock price, replace with real data
        change: Math.random() > 0.5 ? 1 : -1, // Mock change, replace with real data
      }));
      setStocks(topStocks);
    };
    const fetchNews = async () => {
      const response = await axios.get(
        `https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-07-10&to=2024-07-15&token=cqb5dn9r01qmfd85t0ogcqb5dn9r01qmfd85t0p0`
      );
      setNews(response.data);
    };

    fetchStocks();
    fetchNews();
  }, []);
  return (
    <div className="mt-24">
      <section className="banner max-sm:hidden ">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.maleyat.ae/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4gm0l8ni%2Fmaleyat-ae%2F71f8568f16ccb761707a5612ab4eec8a14def041-1191x520.png%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75')",
          }}
        >
          <div className="md:w-3/6  md:pt-48 animationLeft" ref={addElement}>
            <h1 className="text-center text-teal-700  text-3xl  md:text-6xl font-serif">
              The Largest & Most Regualted Financial Derivatives Broker
              Worldwide
            </h1>
          </div>
        </div>
      </section>
      <section className="banner md:hidden ">
        {/* <div className="">
          <h1 className="text-center text-teal-700  text-3xl  font-semibold">
            The Largest & Most Regualted Financial Derivatives Broker Worldwide
          </h1>
        </div> */}
        <div className="flex  relative justify-center">
          <img
            src="https://www.maleyat.ae/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4gm0l8ni%2Fmaleyat-ae%2Fdbb2241dbdb01d813381bf5c65ec52650a1851e2-393x431.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
            alt=""
          />
          <div className="absolute mt-28 justify-center">
            <h1 className="text-center text-teal-700  text-3xl  font-semibold">
              The Largest & Most Regualted Financial Derivatives Broker
              Worldwide
            </h1>
          </div>
        </div>
      </section>

      {/* about us */}
      <div className="flex  max-sm:flex-col-reverse  items-center  bg-white  mt-24 ">
        <div
          className="md:w-3/6 flex flex-col items-center  mb-8 max-sm:mx-2 topToBottom"
          ref={addElement}
        >
          <img
            src="https://img.freepik.com/free-photo/attractive-young-freelance-trader-using-laptop-trading-while-working-from-home_662251-802.jpg?t=st=1721139371~exp=1721142971~hmac=0c13eb8ece14787046a8fc1c3b14faa5eacc9d3a3b828cf1a7ee4fd99e7490d0&w=740"
            alt="Traders"
            className="mb-4  rounded-md h-96 "
          />
        </div>
        <div
          className="w-6/6 md:w-3/6 flex flex-col   mx-3 md:items-start  mb-8 animationRight"
          ref={addElement}
        >
          <div className="max-sm:flex flex-col items-center">

          <h6 className="text-md text-teal-500 font-semibold animationRight">Who We Are</h6>
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
      {/* top stocks */}
      <section className=" p-8 overflow-hidden">
        {/* <h1 className="text-2xl font-bold mb-6">Top Stocks</h1> */}
        <div className="relative w-full">
          <div className="flex animate-marquee whitespace-nowrap">
            {stocks.map((stock) => (
              <div
                key={stock.symbol}
                className="bg-white m-2 p-4 rounded-lg shadow-md flex-shrink-0 w-64 bg-gradient-to-br from-gray-600  to-gray-800"
              >
                <h2 className="text-md font-semibold text-white mb-2">
                  {stock.symbol}
                </h2>
                <p
                  className={`text-md font-semibold ${
                    stock.change > 0 ? "text-teal-600" : "text-red-500"
                  }`}
                >
                  ${stock.price}
                  {stock.change > 0 ? (
                    <FiArrowUp className="inline-block ml-2" />
                  ) : (
                    <FiArrowDown className="inline-block ml-2" />
                  )}
                </p>

                <div className="flex justify-center">
                  <p className="text-gray-500 text-center text-md font-sans">
                    {stock.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end */}

      {/* details abouts */}
      <section className="details mt-8 md:flex md:mx-24 mb-20">
        <div className="flex w-6/6 md:w-3/6 md:justify-center md:items-center">
          <img
            src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/two-stock-exchange-traders-getting-profit-in-trading-currency-stock--1536x1022.jpg"
            alt=""
            srcset=""
            className="h-full object-center"
          />
        </div>
        <div
          className="flex flex-col w-6/6 md:w-3/6 animationRight"
          ref={addElement}
        >
          <h6 className=" pl-10 md:pl-24 mt-10 text-teal-600 text-md font-semibold">
            Our Value
          </h6>
          <h4 className="text-black pl-10 md:pl-24 mt-3  text-xl md:text-4xl font-semibold">
            Your Success is Our Priority
          </h4>
          <p className="pl-10 md:pl-24 mt-5 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,<br></br> luctus nec ullamcorper mattis, pulvinar dapibus
            leo.
          </p>
          <div className="flex ml-10 md:ml-24 mt-8">
            <div className=" w-1/6 bg-teal-800 rounded-full max-sm:w-16  max-sm:h-16  md:w-16 md:h-16  flex items-center justify-center">
              <i
                aria-hidden="true"
                className="mdi mdi-rocket-launch text-white text-4xl"
              ></i>
            </div>
            <div className="mx-3 w-2/3">
              <h2 className="text-2xl">Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex ml-10 md:ml-24 mt-8">
            <div className=" w-1/6 bg-teal-800 rounded-full max-sm:w-16  max-sm:h-16  md:w-16 md:h-16  flex items-center justify-center">
              <i
                aria-hidden="true"
                className="mdi mdi-bullseye-arrow text-white text-4xl"
              ></i>
            </div>
            <div className="mx-3 w-2/3">
              <h2 className="text-2xl">Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      {/* first arab banner */}
      <section className="bg-teal-900 md:flex mx-2 md:mx-10 rounded-lg mt-5 ">
        <div
          className="w-4/6  flex flex-col justify-center items-center max-sm:hidden animationLeft"
          ref={addElement}
        >
          <h1 className=" text-white  text-4xl md:text-5xl mx-10 pt-10 font-serif mb-4">
            Start Trading Today and Unlock Your Financial Potential
          </h1>
          <p className=" text-white mt-3 text-lg mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mx-10 px-8 mt-4 py-4 bg-teal-900 text-white font-bold rounded-full hover:border-white hover:border-2">
            Start Trading Now!
          </button>
        </div>
        <div className="md:w-2/6 flex flex-col animationRight" ref={addElement}>
          <img
            src="https://www.maleyat.ae/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4gm0l8ni%2Fmaleyat-ae%2Fd21aa3b0393a607307c894d30bc04be02bec8e81-640x493.webp%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-6/6  flex flex-col justify-center items-center md:hidden">
          <h1 className=" text-white  text-3xl text-center  pt-10 font-bold mb-4">
            Start Trading Today and Unlock Your Financial Potential
          </h1>
          <p className=" text-white mt-3 text-lg mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mb-10 mx-10 px-8 mt-4 py-4 bg-gray-500 text-white font-bold rounded-full hover:bg-teal-600">
            Start Trading Now!
          </button>
        </div>
      </section>

      {/* end */}

        {/* offer products */}
        <section className="bg-gray-200 md:mt-8 ">
        <h5 className="text-center font-semibold text-teal-800 pt-20">
          WHAT WE OFFER
        </h5>
        <h1 className="text-center text-2xl md:text-4xl font-semibold max-sm:mx-5 mt-3 ">
          Unlock Financial Success with Strategic Trading
        </h1>
        {/* <h1 className="text-center   text-2xl md:text-4xl font-semibold">Trading</h1> */}
        <div className="items flex justify-center mt-10  md:mx-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-8  ">
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Investment-1.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Exchange-Rate-3.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-conte…oads/sites/11/2024/05/Anonymous-Transaction-4.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Trading-6.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-conte…s/sites/11/2024/05/Market-Trading-Analytics-2.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 mb-12 shadow-xltransform transition-transform duration-10 hover:scale-105  ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Secure-Trading-5.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end */}
      {/* why invets */}

      <section className="invest mt-8  mx-3 md:mx-36  mb-20">
        <h1
          className="text-center text-white-500  text-5xl font-serif topToBottom"
          ref={addElement}
        >
          Why <span className="text-teal-700">Invest</span> With Us?
        </h1>
        <div className="grid grid-cols-1 gap-2  md:grid-cols-3 md:gap-12 mt-9  ">
          <div
            className="flex justify-center items-center bg-teal-700   h-28  rounded-2xl transform transition-transform duration-10 hover:scale-105 animationLeft"
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
            className="flex justify-center items-center bg-teal-700  h-28 rounded-2xl   transform transition-transform duration-10 hover:scale-105 animationLeft"
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
            className="flex justify-center items-center bg-teal-700  h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105 animationLeft"
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
            className="flex justify-center items-center bg-teal-700 h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105 animationRight"
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
            className="flex justify-center items-center bg-teal-700  h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105  animationRight"
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
            className="flex justify-center items-center bg-teal-700  h-28 rounded-2xl  transform transition-transform duration-10 hover:scale-105  animationRight"
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
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Counter end={27} label="Years of Experience" />
          <Counter end={29000} label="Project Done" />
          <Counter end={279} label="Expert Team" />
          <Counter end={539000} label="Happy Client" />
        </div>
      </div>

      {/* offer products */}
     
     
      <section className="bg-gray-200 md:mt-8 ">
        <h5 className="text-center font-semibold text-teal-800 pt-20">
          WHAT WE OFFER
        </h5>
        <h1 className="text-center text-2xl md:text-4xl font-semibold max-sm:mx-5 mt-3 ">
          Unlock Financial Success with Strategic Trading
        </h1>
        {/* <h1 className="text-center   text-2xl md:text-4xl font-semibold">Trading</h1> */}
        <div className="items flex justify-center mt-10  md:mx-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-8  ">
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Investment-1.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Exchange-Rate-3.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-conte…oads/sites/11/2024/05/Anonymous-Transaction-4.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Trading-6.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 shadow-xl mb-4 transform transition-transform duration-10 hover:scale-105 ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-conte…s/sites/11/2024/05/Market-Trading-Analytics-2.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="flex flex-col bg-white w-96 h-80 mb-12 shadow-xltransform transition-transform duration-10 hover:scale-105  ZoomInOut"
              ref={addElement}
            >
              <img
                className="h-28 w-28 mt-6 mx-8"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Secure-Trading-5.png"
                alt=""
              />
              <h1 className="text-2xl mx-9 mt-3 font-medium">
                Tailored Strategies{" "}
              </h1>
              <p className="mt-3 mx-9 text-gray-400">
                Efficitur nec lorem tempus eget felis etiam neque quis sodales
                sollicitudin
              </p>
              <div className="flex items-center">
                <button className="bg-teal-800 mt-3  mx-9 w-28 h-8 text-white font-serif  ">
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
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 scaleUp"
            ref={addElement}
          >
            Start Trading Today and Unlock Your Financial Potential
          </h1>
          <p
            className="text-lg md:text-xl mb-8 animationRight"
            ref={addElement}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button
            className="px-8 py-4 bg-teal-900 text-white font-bold rounded-full hover:bg-teal-600 topToBottom"
            ref={addElement}
          >
            Start Trading Now!
          </button>
        </div>
      </div>
      {/* end */}

  

      {/* video */}
      {/* <div className="video mt-10 mx-2 ">
        <div className="relative ">
          <video
            className="h-72 w-full object-cover"
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vv03xyNwg/videoblocks-650883be57dea74f50a977f9_hvvt6bwnp__974a14653ae524b28e7f99f641f5f3c1__P360.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div> */}
      {/* apps section */}
      <section className="apps mt-10 max-sm:hidden bg-neutral-800 mx-5 rounded-xl">
        <div className="mx-10 flex justify-center  bg-transparent	 h-96 ">
          <div
            className="w-3/6 justify-center items-center bottomToTop"
            ref={addElement}
          >
            <img
              className="h-96   mx-20"
              src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/mock-up-copy-space-pretty-brazilian-or-hispanic-2024-04-23-02-10-38-3-e1717138224410.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="w-3/6 animationRight" ref={addElement}>
            <div className="title flex mt-24">
              <h1 className="text-white text-5xl font-serif">
                Trade Seamlessly on Any Device, Anytime
              </h1>
            </div>
            <p className="text-white pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-4 mt-3">
              <img
                className=" w-48 object-fill"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Asset-4@300x-8-1536x465.png"
                alt=""
              />
              <img
                className=" w-48 object-fill"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Asset-3@300x-8-1536x465.png"
                alt=""
              />
              <img
                className=" w-48  object-fill"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Microsoft-White-2048x620.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* for mobile */}
      <section className="apps mt-10 md:hidden bg-neutral-800 mx-3">
        <div className=" flex-col justify-center  bg-transparent h-96 rounded-xl">
          <div className="mx-2">
            <div className="title flex pt-12 text-white text-center text-3xl font-serif">
              {/* <h1 className="text-white text-center text-3xl font-serif"> */}
              Trade Seamlessly on Any Device, Anytime
              {/* </h1> */}
            </div>
            <p className="text-white pt-5 text-center px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <img
                className=" w-48 object-fill"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Asset-4@300x-8-1536x465.png"
                alt=""
              />
              <img
                className=" w-48 object-fill"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Asset-3@300x-8-1536x465.png"
                alt=""
              />
              <img
                className=" w-48  object-fill"
                src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Microsoft-White-2048x620.png"
                alt=""
              />
            </div>
          </div>
          <div className=" h-96 bg-neutral-800">
            <img
              className="h-96"
              src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/mock-up-copy-space-pretty-brazilian-or-hispanic-2024-04-23-02-10-38-3-e1717138224410.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>

      {/* clint review */}

      {/* <section className="clint mt-24 mb-24">
        <div className="mx-24 flex">
          <div className="w-3/6 flex-col">
            <h1 className="text-4xl font-serif">Our Clients Reviews</h1>
            <div className=" mt-3">
              <p className="text-md max-w-md text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="mt-5">
              <button className="bg-teal-800 text-white h-8 w-32 text-center font-semibold rounded-sm">
                Start Trading
              </button>
            </div>
          </div>
          <div className="w-3/6">
            <div className="flex gap-3">
              <div className="content-1 bg-gray-200 h-56 w-80 rounded-md"></div>
              <div className="content-1 bg-gray-200  h-56 w-80 rounded-md"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* footer */}
      {/* <footer className="bg-black text-white py-8 max-sm:hidden">
        <div className="flex mx-28 items-center gap-10">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center">
              <i aria-hidden="true" class="mdi mdi-map-marker text-xl"></i>
            </div>
            <div className="px-3">
              <p className="font-bold">Head Office</p>
              <p>Jalan Cempaka Wangi No 22</p>
              <p>Jakarta - Indonesia</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center">
              <i aria-hidden="true" class="mdi mdi-email text-xl"></i>
            </div>
            <div className="px-3">
              <p className="font-bold">Email Support</p>
              <p>hello@yourdomain.tld</p>
              <p>support@yourdomain.tld</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center">
              <i aria-hidden="true" class="mdi mdi-phone-in-talk text-xl"></i>
            </div>
            <div className="px-3">
              <p className="font-bold">Phone</p>
              <p>Phone: +6221.2002.2012</p>
              <p>Fax: +6221.2002.2013</p>
            </div>
          </div>
        </div>
        <hr className="mx-28 mt-3 border-1 border-gray-600" />

        <div className="last row mx-28 mt-5">
          <div className="flex gap-5">
            <div className="w-2/6">
              <div className="title flex-col items-center justify-center">
                <img
                  className="  w-44"
                  src=" https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Logo-Utama-DUA-white.png"
                  alt=""
                />
                <p className="text-white py-5">
                  Integer tempor porta iaculis morbi commodo molestie fames ex
                  dignissim
                </p>
                <div className="search flex items-center">
                  <div className=" flex justify-center items-center ">
                    <input
                      placeholder="Serach .."
                      type="text"
                      className="h-12 w-72 px-3"
                    />
                    <div className="serach icon bg-blue-600 h-12 flex items-center">
                      ICON
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-col  items-center w-1/6">
              <h1 className=" text-xl mb-5">Product</h1>
              <h6 className=" text-sm mb-2">Stocks</h6>
              <h6 className=" text-sm mb-2">Ipo</h6>
              <h6 className=" text-sm mb-2">Mutal Funds</h6>
              <h6 className=" text-sm mb-2">Credits</h6>
            </div>
            <div className=" flex-col  items-center w-1/6">
              <h1 className=" text-xl mb-5">Company</h1>
              <h6 className=" text-sm mb-2">Abouts</h6>
              <h6 className=" text-sm mb-2">Services</h6>
              <h6 className=" text-sm mb-2">Vision</h6>
              <h6 className=" text-sm mb-2">Credits</h6>
            </div>
            <div className="w-2/6 lg:w-1/3 mb-6 lg:mb-0">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg text-center">
                <p className="font-bold mb-4">Newsletter</p>
                <p className="mb-4">
                  Sign up for our newsletter for updates, news, insights, and
                  promotions.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-2 px-4 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full py-2 px-4 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-full bg-teal-500 text-white font-bold"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8  mx-28 flex justify-between items-center border-t border-gray-700 pt-4">
          <p>
            Copyright© 2024 Finavest, All rights reserved. Powered by
            MoxCreative.
          </p>
          <div className="flex space-x-4 ">
            <div className="rounded-full border-2 border-white h-10 w-10 flex justify-center items-center">
              <a href="#">
                <span class="mdi mdi-facebook text-3xl "></span>
              </a>
            </div>
            <div className="rounded-full border-2 border-white h-10 w-10 flex justify-center items-center">
              <a href="#">
                <span class="mdi mdi-instagram"></span>
              </a>
            </div>
            <div className="rounded-full border-2 border-white h-10 w-10 flex justify-center items-center">
              <a href="#">
                <span class="mdi mdi-twitter text-3xl "></span>
              </a>
            </div>
            <div className="rounded-full border-2 border-white h-10 w-10 flex justify-center items-center">
              <a href="#">
                <span class="mdi mdi-linkedin text-3xl "></span>
              </a>
            </div>
          </div>
        </div>
      </footer> */}

      {/* end */}
    </div>
  );
}

export default Home;

{
  /* <section className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Top 10 Stocks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stocks.map(stock => (
          <div key={stock.symbol} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{stock.symbol}</h2>
            <p className="text-gray-700">Price: ${stock.price}</p>
            <p className="text-gray-500">{stock.description}</p>
          </div>
        ))}
      </div>
    </section> */
}

{
  /* <section className="bg-gray-100 p-8 overflow-hidden">
        <h1 className="text-2xl font-bold mb-6">Top 10 Stocks</h1>
        <div className="relative w-full">
          <div className="flex animate-marquee whitespace-nowrap">
            {stocks.map(stock => (
              <div key={stock.symbol} className="bg-white m-2 p-4 rounded-lg shadow-md flex-shrink-0 w-40">
                <h2 className="text-xl font-semibold mb-2">{stock.symbol}</h2>
                <p className="text-gray-700">${stock.price}</p>
                <p className="text-gray-500">{stock.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */
}

{
  /* cilnt review */
}
{
  /* <section className="review">
      <h1>Top 10 Stocks</h1>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            {stock.symbol}: ${stock.price}
          </li>
        ))}
      </ul>

      <div>
      <h1>Apple Stock Data</h1>
  
      <h2>Company News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.headline}</a>
          </li>
        ))}
      </ul>
    </div>

      </section> */
}

{
  /* end */
}
