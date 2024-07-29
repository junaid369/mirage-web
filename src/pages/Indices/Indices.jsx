import React from "react";
import Footer from "../../components/Footer/Footer";

function Indices() {
  return (
    <div className="mt-24">
      {/* banner */}
      <section class="banner bg-slate-800 mb-14 ">
        <div class="lg:flex items-center justify-center lg:mx-10 pt-16 lg:pt-0 md:h-md-800 lg:h-[500px]">
          <div class="max-sm:w-6/6 md:w-6/6 lg:w-3/6 max-sm:mx-5 md:mx-5 lg:mx-0">
            <h1 class="max-sm:text-3xl text-5xl text-white lg:ml-20 font-serif">
              Indices trading with low and stable spreads³
            </h1>
            <p class="text-md text-gray-300 lg:text-left pt-5 lg:max-w-xl lg:ml-20">
              Indices trading lets you buy and sell index instruments from the
              US, UK, Asia-Pacific and Europe.
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
          <h1 className="text-sm font-thin py-1">ABOUT INDICES</h1>
          <h1 className="text-3xl     font-serif py-1">What are index CFDs?</h1>
          <p className="descrption py-1 text-md">
            Index CFDs (or indices) are contracts that allow traders to
            speculate at a lower cost on the increase (or decrease) in value of
            a group of stocks that have been selected by industry and economy.
            The UT100 groups America’s top 100 tech companies and the UK100 has
            a hundred British companies; allowing traders to open one position
            to track (and trade on) their collective performance.
          </p>
        </div>
      </section>

      {/* why trade */}
      <section className="whytrade max-sm:mx-5 lg:mx-32">
        <div className="title flex-col justify-center ">
          <h1 className="text-center text-4xl font-serif py-3">
            Why trade Indices market with{" "}
            <span className="gradient-text">Mirage</span>
          </h1>
          <p className="text-center  text-sm lg:text-lg  lg:px-72 text-gray-500">
            From the US Tech 100 to the S&P, gain exposure to highly traded
            global indices with a broker that knows what matters to you.
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
              <h1 className="text-xl py-2 font-medium">Fast execution</h1>
              <p className="text-md">
                Never miss a pip. Get your orders executed in milliseconds on
                both the MT platforms and proprietary Exness Terminals.
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
                Lower your trading costs with tight spreads that stay stable and
                reliable, even in volatile conditions. Maximize your performance
                and minimize your costs, even when the volatility index is
                high.³
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
              <h1 className="text-xl py-2 font-medium">Stop Out Protection</h1>
              <p className="text-md">
                Delay or sometimes avoid stop outs with our proprietary market
                protection feature. Strengthen your positions with a condition
                designed to help your strategy endure volatility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Indices;
