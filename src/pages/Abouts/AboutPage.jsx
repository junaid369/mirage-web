import React from "react";
import "../Abouts/Abouts.css";
import WhoweAre from "../../components/Whowe/WhoweAre";
import AboutsDetails from "../../components/Abouts/Abouts";
import Footer from "../../components/Footer/Footer";
import useIntersectionObserver from "../../components/Observer/Observer";
import Invest from "../../components/InvestWIthUs/Invest";
import "../../pages/animation.css";

import { Height } from "@mui/icons-material";

const strengths = [
  {
    title: "Skilled Team",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Skilled Team",
  },
  {
    title: "24x7 Control Room",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for 24x7 Control Room",
  },
  {
    title: "Robust Risk Management",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Robust Risk Management",
  },
  {
    title: "Business Development",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Business Development",
  },
  {
    title: "Market Intelligence",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Market Intelligence",
  },
  {
    title: "Strict Compliance",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Strict Compliance",
  },
  {
    title: "Timely Settlement",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Timely Settlement",
  },
  {
    title: "Strong Support",
    imgUrl:
      "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
    content: "Detailed content for Strong Support",
  },
];

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
    <div className="mt-24">
      <div className="mainbanner mb-20">
        <div
          className="relative  bg-cover bg-center "
          style={{
            height: "30em",

            backgroundImage:
              "url('https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/stock-investors-shaking-hands-business-man-trading-stocks-for-profit-stock-market-oscillating-grap.jpg')",
          }}
        >
          {/* Gradient overlay  */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div> */}

          <div className="relative pt-64">
            <h1 className="text-center text-white text-5xl md:text-6xl font-semibold">
              About Us
            </h1>
          </div>
          <h2 className="relative text-2xl text-white text-center pt-10 font-semibold">
            Empowering Traders with Innovative Solutions
          </h2>
          <nav className="pt-6 flex justify-center">
            <ol className="flex text-white">
              <li>
                <a href="/" className="hover:text-teal-800  font-bold">
                  Home
                </a>
              </li>
              <li className="mx-2">/</li>
              <li className="text-gray-300">About Us</li>
            </ol>
          </nav>
          {/* Gradient overlay  */}
        </div>
      </div>
      <WhoweAre />

      {/* values */}
      <section className="values mb-20 bg-gray-900 py-10">
        <div className="  md:mx-5  lg:mx-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:mx-2   md:p-0  lg:p-10 md:justify-center md:items-center ">
          <div className="first item ">
            <div className="image rounded-2xl  flex justify-center items-center  zoom-container">
              <img
                className="rounded-2xl  w-full h-full  object-cover transition-transform duration-300"
                src="https://www.yamarkets.com/public/web/img/goals.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="second item">
            <div className="content ">
              <h1 className="text-xl px-3 font-serif text-yellow-400">Our Vision</h1>
              <p className="text-md px-3 text-white">
                To be the leading trading platform in the UAE, known for integrity, reliability, and client satisfaction. We envision
                a future where every trader can achieve consistent profits and financial freedom through our platform.
              </p>
            </div>
          </div>

          {/* <div className="forth item max-sm:hidden lg:hidden">
            <div className="contents ">
              <p className="text-md px-3  text-white">
                To be the leading trading platform in the UAE, known for integrity, reliability, and client satisfaction. We envision
                a future where every trader can achieve consistent profits and financial freedom through our platform.
              </p>
            </div>
          </div> */}

          <div className="third item">
            <div className="image zoom-container rounded-2xl  ">
              <img
                className="rounded-2xl  w-full h-full  object-cover transition-transform duration-300"
                src="https://www.yamarkets.com/public/web/img/values.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="forth item md:hidden lg:block">
            <div className="contents ">
              <h1 className="text-xl px-3 font-serif text-yellow-400">Our Values</h1>

              <p className="text-md px-3  text-white  py-5">
                Ensuring secure, seamless trading with MetaTrader integration, Mirage Trading provides a trusted, user-friendly platform, cementing our status as the leading choice for traders globally.
              </p>
            </div>
          </div>
          <div className="fifth item ">
            <div className="image rounded-2xl  flex justify-center items-center   zoom-container">
              <img
                className="rounded-2xl  w-full h-full  object-cover transition-transform duration-300"
                src="https://www.yamarkets.com/public/web/img/vision.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="sixth item">
            <div className="contents py-5">
              <h1 className="text-xl px-3 font-serif text-yellow-400  pt-3">Our Mission</h1>
              <p className="text-md px-3   text-white  pt-2">
                Our mission is to empower traders by providing a secure, regulated, and profitable trading environment. We aim to
                guide our clients with strategies that maximize their success and minimize risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* who we are */}
      {/* <div className="bg-white py-12 h-128 md:mx-20  mb-28">
        <div className=" mx-auto px-4 sm:px-6 max-lg:px-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative">
              <img
                src="https://thepixelcurve.com/html/techwix/techwix/assets/images/shape/about-shape2.png"
                alt="Background"
                className="max-sm:hidden absolute inset-0 md:pl-32 object-cover rounded-xl md:transform -translate-y-10"
              />

              <div className="relative animationLeft" ref={addElement}>
                <img
                  className="max-sm:w-48 rounded-lg"
                  src="https://thepixelcurve.com/html/techwix/techwix/assets/images/about-3.jpg"
                  alt=""
                />
              </div>
              <div
                className=" animationRight absolute max-sm:bottom-8  md:bottom-8 right-0 md:right-6  transform translate-y-1/4"
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
              className="flex flex-col justify-center max-sm:mt-14 md:ml-16 animationRight"
              ref={addElement}
            >
              <h3 className="text-sm font-semibold text-teal-600 uppercase">
                Who We Are
              </h3>
              <h2 className="mt-2 text-3xl font-normal text-gray-900">
                Highly Tailored IT Design, Management & Support Services.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Accelerate innovation with world-class tech teams. We’ll match
                you to an entire remote team or incredible freelance talent for
                all your software development needs.
              </p>
              <hr className="mt-1" />
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  Accelerate innovation with world-class tech teams. We help
                  businesses elevate their value.
                </p>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
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
      </div> */}

      {/* end */}
      {/* why choose */}
      {/* <div className="choosemirage md:mx-10  lg:mx-28 max-sm:mx-5 mb-10">
        <h1 className="title text-4xl text-black font-bold">
          Why Choose <span className="gradient-text">Mirage?</span>
        </h1>
        <p className="text-lg text-gray-700  pt-6">
          Choose Mirage Trading for a superior trading experience characterized by our secure, user-friendly platform and cutting-edge technology. We offer seamless integration with MetaTrader 4 and 5, real-time data, and advanced tools designed to enhance your trading efficiency. With a commitment to regulatory compliance and unparalleled customer support, Mirage Trading ensures that you have everything you need to make informed decisions and achieve your financial goals.
        </p>
      </div> */}
      {/* end */}

      {/* <WhoweAre /> */}
      <AboutsDetails />
      {/* key strength */}
      <div className="keyfeatures md:mx-5 lg:mx-28   mx-5 mt-16 mb-16">
        <h1 className="gradient-text text-4xl text-center font-bold">
          Our Key Strengths
        </h1>
        <p className="text-gray-700 text-lg md:text-center pt-8">
          Considering the unique position of TPTCL and current market dynamics,
          TPTCL has ambitious plans to emerge as the most trusted value-added
          service providing company, with holistic solutions in its kitty. TPTCL
          has ambitious plans to increase presence in all segments of power
          trading.
        </p>

        <div className="features grid  md:grid-cols-4   lg:grid-cols-4   max-sm:grid-cols-1 md:gap-3 items-center md:mx-10 lg:mx-72 mx-4 mt-8 cursor-pointer">
          {[
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Skilled-Team.jpg",
              title: "Skilled Team",
              detail:
                "Skilled team of professionals with more than 1 man-years’ experience in the power sector.",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/24x7-Control-Room.jpg",
              title: "24 x 7 Control Room",
              detail: "24X7 control room for trading and scheduling of power",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Robust-Risk-Management.jpg",
              title: "Robust Risk Management",
              detail: "Robust Risk Management ",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Business-Developement.jpg",
              title: "Business Development",
              detail:
                "Core business development to capture opportunities, backed by proficient Operations and Finance team for smooth implementation of contracts.",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Market-Intelligence.jpg",
              title: "Market Intelligence",
              detail: "Market Intelligence",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Strict-Compliance.jpg",
              title: "Strict Compliance",
              detail:
                "Strict Adherence to the regulatory and statutory compliance",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Timely-settlement.jpg",
              title: "Timely Settlement",
              detail:
                "Timely settlement of transactions and prompt payment/ recovery of dues.",
            },
            {
              src: "https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg",
              title: "Strong Support",
              detail:
                "Strong Support from our parent i.e., Tata Power Company Limited",
            },
          ].map((item, index) => (
            <div
              className="image-container relative flex md:justify-center   max-sm:mb-6"
              key={index}
            >
              <div className="absolute  bg-gradient-to-b from-transparent to-black"></div>
              <div className="image relative flex justify-center">
                <img
                  className="object-cover max-sm:w-96 lg:w-72"
                  src={item.src}
                  alt=""
                />
                <div className="absolute mt-5 left-4 bg-yellow-400 w-8 h-1 group-hover:opacity-0"></div>
                <h1 className="absolute bottom-4 transform text-white bg-black bg-opacity-50 px-2 py-1 rounded max-sm:text-center" style={{animationName:"zoomIn"}}>
                  {item.title}
                </h1>
              </div>
              <div className="detail   overflow-x-auto absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center p-4 text-center hidden">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* end */}
      <Invest />

      <Footer />
    </div>
  );
}

export default Abouts;

{
  /* <div className="features md:grid grid-cols-4 gap-3 items-center mx-72 mt-8 cursor-pointer">
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Skilled-Team.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4  transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Skilled Team
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/24x7-Control-Room.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4  text-center transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              24 x 7 Control Room
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Robust-Risk-Management.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4 text-center  transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Robust Risk Managment
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Business-Developement.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4 text-center  transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Business Development
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Market-Intelligence.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4 text-center transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Market Intelligence
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Strict-Compliance.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4 text-center transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Strict Compliance
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Timely-settlement.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4  text-center transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Timely Settlement
            </h1>
          </div>
          <div className="image relative flex justify-center">
            <img
              className="object-cover "
              src="https://tatapowertrading.com/wp-content/uploads/2021/06/Strong-Support.jpg"
              alt=""
            />
            <h1 className="absolute bottom-4  text-center transform text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Strong Support
            </h1>
          </div>
        </div> */
}
