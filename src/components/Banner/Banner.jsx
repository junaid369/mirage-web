import React from 'react'
import useIntersectionObserver from "../Observer/Observer";
import "../../pages/animation.css";
import "../Banner/Banner.css";


function Banner() {
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
       <section className="banner max-sm:hidden">
        <div
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url('https://www.maleyat.ae/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4gm0l8ni%2Fmaleyat-ae%2F71f8568f16ccb761707a5612ab4eec8a14def041-1191x520.png%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75')",
          }}
        >
          {/* md:pt-72 max-lg:pt-96 */}
          <div className="md:w-3/6   animationLeft" ref={addElement}>
            <h1 className="text-center gradient-text   text-3xl  md:text-6xl font-serif">
              The Largest & Most Regualted Financial Derivatives Broker
              Worldwide
            </h1>
          </div>
        </div>
      </section>
      <section className="banner md:hidden ">
      
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
    </div>
  )
}

export default Banner
