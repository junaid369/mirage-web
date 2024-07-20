import React from "react";
import useIntersectionObserver from "../../components/Observer/Observer";
// import React, { useEffect, useState, useRef } from "react";
import "../../pages/animation.css";

function AppsBanner() {
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
      <section className="apps mt-10   md:hidden bg-neutral-800 mx-3">
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

      <section className="clint mt-24 mb-24">
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
      </section>
    </div>
  );
}

export default AppsBanner;
