import React from "react";
import Footer from "../../components/Footer/Footer";


function Forex() {
  return (
    <div className="mt-24">
      {/* banner */}
      <section class="banner bg-slate-800 mb-14 ">
        <div class="lg:flex items-center justify-center lg:mx-10 pt-16 lg:pt-0 md:h-md-800 lg:h-[500px]">
          <div class="max-sm:w-6/6 md:w-6/6 lg:w-3/6 max-sm:mx-5 md:mx-5 lg:mx-0">
            <h1 class="max-sm:text-3xl text-5xl text-white lg:ml-20 font-serif">
              Trade Forex
            </h1>
            <p class="text-md text-gray-300 lg:text-left pt-5 lg:max-w-xl lg:ml-20">
              Currencies aren't only useful when they're in your pocket; they
              make up the biggest and most liquid market in the world,
              attracting millions of traders. Trade CFDs on 180+ major, minor
              and exotic pairs in the largest financial market out there.
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
      {/* what is forex */}
      <section className="detailDescrption max-sm:mx-5  lg:mx-32 mb-16">
        <div className="contents">
          <h1 className="text-sm font-thin py-1">About Fx Pairs</h1>
          <h1 className="text-3xl     font-serif py-1">What are forex CFDs?</h1>
          <p className="descrption py-1 text-md">
            FX CFDs are contracts that are used to trade on currency pairs with
            added leverage. Online traders often choose CFDs as you can
            speculate on the rise or fall of an FX pair’s value - without
            directly owning it. “Forex” stands for “foreign exchange” (or
            currency pairs) and “CFDs” stands for “Contract for Differences”.
             Read more about these terms in our FAQs below.
          </p>
        </div>
      </section>

      {/* why trade */}
      <section className="whytrade max-sm:mx-5 lg:mx-32">
        <div className="title flex-col justify-center ">
          <h1 className="text-center text-4xl font-serif py-3">
            Why trade forex market with{" "}
            <span className="gradient-text">Mirage</span>
          </h1>
          <p className="text-center  text-sm lg:text-lg  lg:px-72 text-gray-500">
            Take the currency market by storm and trade currencies on
            award-winning Forex trading platforms.
          </p>
        </div>
        <div className="reasons py-5 grid  grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          <div className="p-7 border-2 border-gray-200  rounded-lg">
            <div className="icon flex justify-end items-center">
              <img
                className=""
                src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stop_out_protection_3058b9de65.svg"
                alt=""
              />
            </div>
            <div className="title">
              <h1 className="text-xl py-2 font-medium">Stop Out Protection</h1>
              <p className="text-md">
                Trade Forex online with a unique market protection feature that
                shields your positions against temporary market volatility and
                delays or avoids stop outs.
              </p>
            </div>
          </div>
          <div className="p-7 border-2 border-gray-200   rounded-lg">
            <div className="icon flex justify-end items-center">
              <img
                className=""
                src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stable_spreads_832d4a7b36.svg"
                alt=""
              />
            </div>
            <div className="title">
              <h1 className="text-xl py-2 font-medium">
                Low and stable spreads
              </h1>
              <p className="text-md">
                Trade the forex market with low and predictable trading costs.
                Enjoy tight spreads that stay stable, even during economic news
                releases and market events.³
              </p>
            </div>
          </div>
          <div className="p-7 border-2 border-gray-200   rounded-lg">
            <div className="icon flex justify-end items-center">
              <img
                className=""
                src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_fast_execution_57c7f263d9.svg"
                alt=""
              />
            </div>
            <div className="title">
              <h1 className="text-xl py-2 font-medium">Fast execution</h1>
              <p className="text-md">
                Capitalize on the frequent price movements of popular currency
                pairs with ultra-fast execution. Get your FX trading orders
                executed in milliseconds on all available terminals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
}

export default Forex;
