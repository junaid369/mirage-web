import React from "react";
import useIntersectionObserver from "../../components/Observer/Observer";
import "../../pages/animation.css";

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
function ExploreTrading() {
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
      {/* explring */}
      <section className="explore mt-8 mb-24">
        <div className="contents">
          <h1 className="text-3xl font-serif text-center gradient-text">
            Explore Our Trading Solutions
          </h1>
          <p className="text-center text-gray-500 mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec
            <br />
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="products flex justify-center mt-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-5 lg:gap-8 max-sm:mx-5 ">
            <div className=" shadow-md  flex justify-center items-center max-sm:mb-12">
              <div
                className="mx-5 my-5 item-list   bg-slate-100 h-80 w-96 border-1 border-gray-400   scaleUp  "
                ref={addElement}
              >
                <div className=" mx-5 flex justify-start mt-5 ">
                  <img
                    className="h-16 w-16"
                    src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/leaf.png"
                    alt=""
                    srcset=""
                  />
                  <h1 className="text-2xl p-3 text-black">Forex</h1>
                </div>
                <div className="flex mx-5 mt-2">
                  <StarRating rating={4.5} />
                </div>
                <div className="content mt-3">
                  <p className="text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>

                  <div className="mx-3 mt-3  gap-2">
                    <p className="text-black">Exchange:</p>
                    <p className="text-teal-600 font-mono">
                      EUR/USD, USD/JPY, GPB/USD, ETC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" shadow-md shadow-slate-300 flex justify-center items-center max-sm:mb-12">
              <div
                className=" mx-5 my-5 item-list bg-slate-100 h-80 w-96 border-1 border-gray-400   scaleUp"
                ref={addElement}
              >
                <div className=" mx-5 flex justify-start mt-5 ">
                  <img
                    className="h-16 w-16"
                    src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/a-lab.png"
                    alt=""
                    srcset=""
                  />
                  <h1 className="text-2xl p-3">Cryptocurrency</h1>
                </div>
                <div className="flex mx-5 mt-2">
                  <StarRating rating={4.5} />
                </div>
                <div className="content mt-3">
                  <p className="text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>

                  <div className="mx-3 mt-3  gap-2">
                    <p>Exchange:</p>
                    <p className="text-teal-600 font-mono">
                      EUR/USD, USD/JPY, GPB/USD, ETC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" shadow-md shadow-slate-300 flex justify-center items-center max-sm:mb-12">
              <div
                className="mx-5  my-5 item-list bg-slate-100 h-80 w-96 border-1 border-gray-400   scaleUp"
                ref={addElement}
              >
                <div className=" mx-5 flex justify-start mt-5 ">
                  <img
                    className="h-16 w-16"
                    src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/aven.png"
                    alt=""
                    srcset=""
                  />
                  <h1 className="text-2xl p-3">Equity</h1>
                </div>
                <div className="flex mx-5 mt-2">
                  <StarRating rating={4.5} />
                </div>
                <div className="content mt-3">
                  <p className="text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>

                  <div className="mx-3 mt-3  gap-2">
                    <p>Exchange:</p>
                    <p className="text-teal-600 font-mono">
                      EUR/USD, USD/JPY, GPB/USD, ETC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  shadow-md shadow-slate-300 flex justify-center items-center max-sm:mb-12">
              <div
                className="mx-5 my-5 item-list bg-slate-100 h-80 w-96 border-1 border-gray-400   scaleUp"
                ref={addElement}
              >
                <div className=" mx-5 flex justify-start mt-5 ">
                  <img
                    className="h-16 w-16"
                    src="	https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/hexa.png"
                    alt=""
                    srcset=""
                  />
                  <h1 className="text-2xl p-3">Stock</h1>
                </div>
                <div className="flex mx-5 mt-2">
                  <StarRating rating={4.5} />
                </div>
                <div className="content mt-3">
                  <p className="text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>

                  <div className="mx-3 mt-3  gap-2">
                    <p>Exchange:</p>
                    <p className="text-teal-600 font-mono">
                      EUR/USD, USD/JPY, GPB/USD, ETC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" shadow-md shadow-slate-300 flex justify-center items-center max-sm:mb-12">
              <div
                className="mx-5 my-5 item-list bg-slate-100 h-80 w-96 border-1 border-gray-400  scaleUp"
                ref={addElement}
              >
                <div className=" mx-5 flex justify-start mt-5 ">
                  <img
                    className="h-16 w-16"
                    src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/kyan.png"
                    alt=""
                    srcset=""
                  />
                  <h1 className="text-2xl p-3">ETF</h1>
                </div>
                <div className="flex mx-5 mt-2">
                  <StarRating rating={4.5} />
                </div>
                <div className="content mt-3">
                  <p className="text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>

                  <div className="mx-3 mt-3  gap-2">
                    <p>Exchange:</p>
                    <p className="text-teal-600 font-mono">
                      EUR/USD, USD/JPY, GPB/USD, ETC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  shadow-md shadow-slate-300 flex justify-center items-center max-sm:mb-12">
              <div
                className="mx-5 my-5 item-list bg-slate-100 h-80 w-96 border-1 border-gray-400   scaleUp"
                ref={addElement}
              >
                <div className=" mx-5 flex justify-start mt-5 ">
                  <img
                    className="h-16 w-16"
                    src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/treva.png"
                    alt=""
                    srcset=""
                  />
                  <h1 className="text-2xl p-3">Commodity</h1>
                </div>
                <div className="flex mx-5 mt-2">
                  <StarRating rating={4.5} />
                </div>
                <div className="content mt-3">
                  <p className="text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>

                  <div className="mx-3 mt-3  gap-2">
                    <p>Exchange:</p>
                    <p className="text-teal-600 font-mono">
                      EUR/USD, USD/JPY, GPB/USD, ETC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreTrading;
