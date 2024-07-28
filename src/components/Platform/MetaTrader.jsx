import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MetaTrader() {
  const items = [
    {
      image:
        "https://www.forex.com/en/-/media/project/gain-capital/forex/icons/platforms/overview/icon-reuters-news-colour.svg?iar=0&extension=webp",
      title: "Integrated Reuters news",
      description:
        "Unlike most MetaTrader 5 platforms, you’ll have access to integrated Reuters news.",
    },
    {
      image:
        "https://www.forex.com/en/-/media/project/gain-capital/forex/icons/platforms/overview/icon-platforms-seamlessexperience-colours.svg?iar=0&extension=webp",
      title: "Seamless experience",
      description:
        "Tap into the platform’s features in real-time and with no third-party bridges.",
    },
    {
      image:
        "https://www.forex.com/en/-/media/project/gain-capital/forex/icons/platforms/overview/icon-platforms-automatedtradingwitheas-colour.svg?iar=0&extension=webp",
      title: "Automated trading with EAs",
      description: "Build your own algorithms in an optimized environment..",
    },
  ];
  const features = [
    {
      title: "Advanced Charting",
      description:
        "MT5 offers advanced charting capabilities, allowing traders to analyze price movements with various technical indicators, graphical objects, and timeframes.",
    },
    {
      title: "Flexible Order Types",
      description:
        "MT5 offers a wide range of order types, including market orders, pending orders, stop orders, and trailing stops, allowing traders to execute trades according to their preferred strategies.",
    },
    {
      title: "Multiple Asset Classes",
      description:
        "Trade almost 2000 instruments, including forex, stocks, commodities, indices, and cryptocurrencies, providing diversification opportunities for traders.",
    },
    {
      title: "Economic Calendar",
      description:
        "The integrated economic calendar in MT5 provides real-time updates on important economic events, helping traders stay informed about market-moving news and make timely trading decisions.",
    },
    {
      title: "Algorithmic Trading",
      description:
        "MT5 enables traders to automate their trading strategies using the built-in MQL5 development environment.",
    },
    {
      title: "One-Click Trading",
      description:
        "MT5 simplifies the trading process with its one-click trading feature, enabling quick and efficient trade execution.",
    },
  ];
  const itemsForList = [
    {
      image: "public/graph1.jpeg",
      title: "Expert Advisor trading",
      description:
        "Automate your trading by creating or downloading an Expert Advisor programme.",
    },
    {
      image: "public/graph2.jpeg",

      title: "3 fully customisable charts",
      description:
        "Quickly switch between different saved custom chart templates.",
    },
    {
      image: "public/graph3.jpeg",

      title: "21 timeframes",
      description:
        "Choose from 21 different timeframes, starting from 1 minute to 1 month.",
    },
    {
      image: "public/graph4.jpeg",

      title: "38 technical indicators",
      description:
        "Identify trends and patterns through a wide selection of 38 different indicators.",
    },
    {
      image: "public/graph5.jpeg",

      title: "6 pending orders types",
      description:
        "Open trades instantly or in the future with 6 order types to choose from..",
    },

    {
      image: "public/graph6.jpeg",

      title: "Built-in economic calendar",
      description:
        "Discover all the major market events and data releases that can potentially shift markets..",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 2 : 0);
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex < itemsForList.length - 2 ? currentIndex + 2 : currentIndex
    );
  };

  return (
    <div class="mt-24">
      {/* banner */}
      <section class="banner bg-slate-800 mb-20">
        <div class="lg:flex items-center justify-center lg:mx-10 pt-16 lg:pt-0 md:h-md-800 lg:h-[500px]">
          <div class="max-sm:w-6/6 md:w-6/6 lg:w-3/6 max-sm:mx-5 md:mx-5 lg:mx-0">
            <h1 class="max-sm:text-3xl text-5xl text-white lg:ml-20 font-serif">
              MetaTrader 5 trading platform
            </h1>
            <p class="text-md text-gray-300 lg:text-left pt-5 lg:max-w-xl lg:ml-20">
              More indicators, more market orders, more instruments – MT5
              provides the professional trader with everything they need to
              succeed in today’s dynamic markets.
            </p>
          </div>
          <div class="max-sm:mx-5 max-sm:w-6/6 md:w-6/6 lg:w-3/6 max-sm:flex justify-center items-center mt-10 lg:mt-0 md:flex">
            <img
              class=""
              src="https://www.forex.com/en/-/media/project/gain-capital/forex/heroes/platforms/metatrader/fxca_mt5_header-mobile.png?h=469&amp;iar=0&amp;w=616&amp;extension=webp&amp;hash=6"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* upgrades */}
      <section class="upgrades max-sm:mx-10 md:mx-10 lg:mx-32 mb-20">
        <div>
          <h1 class="gradient-text text-4xl font-bold text-center h-14">
            MT5 upgrades
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 max-sm:gap-10 lg:gap-5 md:gap-5">
            <div class="items shadow-md py-6 bg-slate-100">
              <div class="icon flex justify-center items-center">
                <img
                  class="h-10 w-10"
                  src="https://www.forex.com/en/-/media/project/gain-capital/forex/icons/accounts/account-types/fxall-dma-bl.svg?iar=0&amp;extension=webp"
                  alt=""
                />
              </div>
              <div class="flex justify-center items-center pt-6">
                <h1 class="gradient-text text-center text-xl">
                  Faster trading
                </h1>
              </div>
              <div class="detais pt-6">
                <p class="text-center text-md px-5">
                  64-bit, multi-threaded platform for faster and more efficient
                  trading than MT4.
                </p>
              </div>
            </div>
            <div class="items shadow-md py-6 bg-slate-100">
              <div class="icon flex justify-center items-center">
                <img
                  class="h-10 w-10"
                  src="https://www.forex.com/en/-/media/project/gain-capital/forex/icons/accounts/account-types/fxall-dma-bl.svg?iar=0&amp;extension=webp"
                  alt=""
                />
              </div>
              <div class="flex justify-center items-center pt-6">
                <h1 class="gradient-text text-center text-xl">
                  Faster trading
                </h1>
              </div>
              <div class="detais pt-6">
                <p class="text-center text-md px-5">
                  64-bit, multi-threaded platform for faster and more efficient
                  trading than MT4.
                </p>
              </div>
            </div>
            <div class="items shadow-md py-6 bg-slate-100">
              <div class="icon flex justify-center items-center">
                <img
                  class="h-10 w-10"
                  src="https://www.forex.com/en/-/media/project/gain-capital/forex/icons/accounts/account-types/fxall-dma-bl.svg?iar=0&amp;extension=webp"
                  alt=""
                />
              </div>
              <div class="flex justify-center items-center pt-6">
                <h1 class="gradient-text text-center text-xl">
                  Faster trading
                </h1>
              </div>
              <div class="detais pt-6">
                <p class="text-center text-md px-5">
                  64-bit, multi-threaded platform for faster and more efficient
                  trading than MT4.
                </p>
              </div>
            </div>
            <div class="items shadow-md py-6 bg-slate-100">
              <div class="icon flex justify-center items-center">
                <img
                  class="h-10 w-10"
                  src="https://www.forex.com/en/-/media/project/gain-capital/forex/icons/accounts/account-types/fxall-dma-bl.svg?iar=0&amp;extension=webp"
                  alt=""
                />
              </div>
              <div class="flex justify-center items-center pt-6">
                <h1 class="gradient-text text-center text-xl">
                  Faster trading
                </h1>
              </div>
              <div class="detais pt-6">
                <p class="text-center text-md px-5">
                  64-bit, multi-threaded platform for faster and more efficient
                  trading than MT4.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-100 max-sm:p-8 md:p-10 lg:p-24">
        <h1 className="text-3xl font-bold mb-8 text-center">
          What makes MT5 the superior Trading Platform
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-green-600 text-2xl">✔️</div>
              <div>
                <h2 className="text-xl font-bold">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* why trade */}
      <section class="mt-10 mb-10">
        <h1 class="h-16 text-black max-sm:text-3xl md:text-3xl lg:text-5xl text-center font-bold">
          Why trade with <span class="gradient-text">Mirage</span> MT5
        </h1>
        <div class="max-sm:mx-5 md:mx-5 lg:mx-28 lg:flex md:flex max-sm:mt-20 md:mt-5 lg:mt-10">
          <div class="lg:w-2/6 md:w-2/6 md:pt-10 lg:pt-28">
            <div class="contents flex-col">
              <div class="firstcontents">
                <div class="title max-w-sm">
                  <h1 class="text-center text-black text-xl lg:text-2xl font-bold">
                    No overnight charges on swap-free accounts
                  </h1>
                </div>
                <div class="paragraph text-center md:mx-4 lg:mx-0">
                  <p class="text-sm lg:text-md text-gray-500 max-sm:pt-5 lg:pt-2 md:pt-2">
                    Leave your positions open overnight without worrying about
                    extra charges.
                  </p>
                </div>
              </div>
              <div class="secondcontents max-sm:mt-10 md:mt-14 lg:mt-28">
                <div class="title max-w-sm">
                  <h1 class="text-center text-black text-xl lg:text-2xl font-bold">
                    Multiple assets on a single platform
                  </h1>
                </div>
                <div class="paragraph max-w-sm lg:mx-0">
                  <p class="text-sm lg:text-md text-center text-gray-500 max-sm:pt-5 lg:pt-2 md:pt-2">
                    Trade Forex, Stocks, Stock Indices, Cryptocurrencies,
                    Commodities, and Derived Indices in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-2/6 md:w-2/6 lg:flex justify-center items-center max-sm:mt-5 max-sm:mb-10">
            <div class="image">
              <img
                class="md:h-[350px] lg:h-[500px]"
                src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d938_MT5-final%20(1).webp"
                alt=""
              />
            </div>
          </div>
          <div class="lg:w-2/6 md:w-2/6 flex-col max-sm:mt-20 md:pt-10 lg:pt-28">
            <div class="firstcontents">
              <div class="title">
                <h1 class="text-center text-black text-xl lg:text-2xl font-bold">
                  Licensed and regulated
                </h1>
              </div>
              <div class="paragraph text-center md:mx-4 lg:mx-0">
                <p class="text-sm lg:text-md text-gray-500 lg:pt-2 max-sm:mt-5 md:pt-2">
                  Trade with a regulated industry pioneer trusted by traders for
                  more than 20 years.
                </p>
              </div>
            </div>
            <div class="secondcontents lg:mt-36 md:mt-24 max-sm:mt-5">
              <div class="title">
                <h1 class="text-center text-black text-xl lg:text-2xl font-bold">
                  24/7 trading
                </h1>
              </div>
              <div class="paragraph text-center lg:mx-0 max-sm:mt-5">
                <p class="text-sm lg:text-md text-gray-500 lg:pt-2 md:pt-2">
                  Trade round-the-clock, even on weekends, with our proprietary
                  Derived Indices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="additional bg-slate-100 ">
        <h1 className="text-center text-4xl pt-7 font-medium gradient-text">
          Additional perks
        </h1>
        <div className="lg:mx-20 grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 lg:p-20">
          {items.map((item, index) => (
            <div
              key={index}
              className="items flex flex-col justify-center items-center"
            >
              <div className="image">
                <img src={item.image} className="h-10 w-10" alt="" />
              </div>
              <div className="title mt-5">
                <h1 className="text-center text-xl">{item.title}</h1>
              </div>
              <div className="contents mt-5">
                <h1 className="text-center text-sm pt-2">{item.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* devices */}
      <section class="mt-10 mb-10">
        <div class="bg-gradient-to-br from-sky-900 to-red-500 max-sm:h-[600px] h-[500px] max-sm:rounded-bl-8xl md:rounded-bl-10xl lg:rounded-bl-12xl lg:flex md:flex items-center">
          <div class="lg:w-3/6 md:w-3/6 md:flex-col lg:flex-col items-center max-sm:mx-5 max-sm:pt-28 md:mx-5 lg:mx-10">
            <div class="title">
              <h1 class="max-sm:text-4xl md:text-4xl lg:text-5xl font-serif font-normal text-white">
                <span class="text-red-500">Trade</span> on all devices
              </h1>
            </div>
            <div class="details max-sm:mt-3 mt-5">
              <h1 class="text-md text-white lg:max-w-lg">
                Embrace the ease and versatility of trading with MT5 on any
                device. Be it Web, Desktop, Android, or iOS, MT5 integrates
                flawlessly, promising a smooth trading journey no matter where
                you are.
              </h1>
            </div>
          </div>
          <div class="max-sm:flex justify-center md:w-3/6 md:mx-2 lg:mx-0 lg:w-3/6">
            <div class="image">
              <img
                class="max-sm:h-64"
                src="https://d1hnl85qs9kdbt.cloudfront.net/wp-content/uploads/2023/08/11205820/Image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* features */}


      <div className="bg-slate-100  p-8 flex flex-col lg:flex-row md:flex-row  mb-10 max-sm:mx-2  md:mx-5">
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">MT5 Features</h1>
          <p className="text-lg">
            Gain access to fast processing speeds and customisable trading
            tools.
          </p>
        </div>

        <div className="md:w-3/6 flex  overflow-x-auto gap-2 md:gap-5 overflow-hidden h-[420px] max-sm:mt-5  ">
          {itemsForList.map((item, index) => (
            <div className="each item   min-w-80 flex flex-col  shadow-lg   border-2 bg-white rounded-3xl h-96 ">
              <div className=" p-5">
                <img src={item.image} alt={item.title} className="" />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold ">{item.title}</h2>
                <p className="text-sm mt-2 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-slate-100 p-8 flex flex-col lg:flex-row md:flex-row mb-10 max-sm:mx-2 md:mx-10">
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">MT5 Features</h1>
          <p className="text-lg">
            Gain access to fast processing speeds and customisable trading
            tools.
          </p>
        </div>

        <div className="md:w-3/6 flex flex-col items-center">
          <div className="flex overflow-hidden h-[420px] gap-5">
            {itemsForList
              .slice(currentIndex, currentIndex + 2)
              .map((item, index) => (
                <div
                  key={index}
                  className="min-w-[45%] flex flex-col shadow-lg border-2 bg-white rounded-3xl h-96"
                >
                  <div className="p-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-between w-full mt-4">
            <button
              onClick={handlePrev}
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition-colors"
              disabled={currentIndex >= itemsForList.length - 2}
            >
              &gt;
            </button>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default MetaTrader;
