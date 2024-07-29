import React from "react";

function Footer() {
  return (
    <div>
      {/* footer */}
      <footer className="bg-black text-white py-8 ">
        <div className="md:flex md:mx-10  lg:mx-28 items-center gap-10">
          <div className="flex items-center mb-4 max-sm:mx-5">
            <div className="rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center">
              <i aria-hidden="true" class="mdi mdi-map-marker text-xl"></i>
            </div>
            <div className="px-3">
              <p className="font-bold">Head Office</p>
              <p>Rawdat Al Wasel, Near Business Bay Metro Station, </p>
              <p>Suite No 110, Sheikh Zayed Collector Rd,
                Dubai, UAE</p>
            </div>
          </div>
          <div className="flex items-center mb-4 max-sm:mx-5">
            <div className="rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center">
              <i aria-hidden="true" class="mdi mdi-email text-xl"></i>
            </div>
            <div className="px-3">
              <p className="font-bold">Email Support</p>
              <p>info@trademirage.com</p>
              {/* <p>support@yourdomain.tld</p> */}
            </div>
          </div>
          <div className="max-sm:flex lg:flex items-center mb-4 md:hidden  max-sm:mx-5">
            <div className="rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center">
              <i aria-hidden="true" class="mdi mdi-phone-in-talk text-xl"></i>
            </div>
            <div className="px-3">
              <p className="font-bold">Phone</p>
              <p>Phone: +971565594679</p>
              {/* <p>Fax: +6221.2002.2013</p> */}
            </div>
          </div>
        </div>
        <hr className="md:mx-10 lg:mx-28 mt-3 border-1 border-gray-600" />

        <div className="last row md:mx-3 lg:mx-28 mt-5">
          <div className="max-sm:flex-col flex md:gap-2 lg:gap-5">
            <div className="md:w-3/6  lg:w-2/6 ">
              <div className="title md:flex-col items-center justify-center">
                <div className="max-sm:flex md:flex lg:flex-col justify-center">
                  <img
                    className="h-20 w-36 object-cover lg:bg-white"
                    src="https://true-blue-movers.s3.amazonaws.com/Mirage.png"
                    alt=""
                  />
                </div>
                <p className="text-white py-5 max-sm:text-center md:text-center lg:text-left   max-sm:p-5">
                  Your trusted platform for secure and seamless trading. Join Mirage Trading and experience excellence with MetaTrader integration.
                </p>
                <div className="search flex items-center ">
                  <div className=" flex justify-center items-center max-sm:mx-5 md:mx-5 lg:mx-0">
                    <input
                      placeholder="Serach .."
                      type="text"
                      className="h-12 max-sm:w-72 md:w-72 lg:w-72 px-3 max-sm:px-10"
                    />
                    <div className="serach icon btn-hover-gradient h-12  w-14 flex items-center justify-center">
                      <span class="mdi mdi-magnify text-4xl"></span>
                    </div>
                  </div>

                </div>
                {/* for medium screens */}
                <div className="lg:hidden max-sm:hidden flex  gap-5 mt-5 mx-5">
                  <div className="w-3/6  flex flex-col justify-center items-start">
                    <h1 className=" text-lg mb-3">Product</h1>
                    <h6 className=" text-sm mb-1 text-gray-200">Stocks</h6>
                    <h6 className=" text-sm mb-1 text-gray-200">Ipo</h6>
                    <h6 className=" text-sm mb-1 text-gray-200">
                      Mutal Funds
                    </h6>
                    <h6 className=" text-sm mb-2 text-gray-200">Credits</h6>
                  </div>
                  <div className="w-3/6 flex flex-col justify-center items-start">
                    <h1 className=" text-lg mb-3">Company</h1>
                    <h6 className=" text-sm mb-1 text-gray-200">Abouts</h6>
                    <h6 className=" text-sm mb-1 text-gray-200">Services</h6>
                    <h6 className=" text-sm mb-1 text-gray-200">Vision</h6>
                    <h6 className=" text-sm mb-1 text-gray-200">Credits</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-sm:hidden  md:hidden lg:block flex-col  items-center w-1/6">
              <h1 className=" text-xl mb-3">Products</h1>
              <h6 className=" text-sm mb-1 text-gray-200">Meta Trader 4</h6>
              <h6 className=" text-sm mb-1 text-gray-200">Meta Trader 5</h6>
              <h6 className=" text-sm mb-1 text-gray-200">Forex</h6>
              <h6 className=" text-sm mb-1 text-gray-200">Indices </h6>
              <h6 className=" text-sm mb-1 text-gray-200">Shares</h6>
            </div>
            <div className="max-sm:hidden   md:hidden lg:block flex-col  items-center w-1/6">
              <h1 className=" text-xl mb-3">Company</h1>
              <h6 className=" text-sm mb-1 text-gray-200">Abouts Us</h6>
              <h6 className=" text-sm mb-1 text-gray-200">Meet Team</h6>
              <h6 className=" text-sm mb-1 text-gray-200">News & Blogs</h6>
              <h6 className=" text-sm mb-1 text-gray-200">Careers</h6>
              <h6 className=" text-sm mb-1 text-gray-200">Contact Us</h6>
            </div>
            <div className="md:hidden flex items-center justify-center gap-3 mx-5 mt-5">
              <div className="w-3/6  flex flex-col justify-center items-start">
                <h1 className=" text-lg mb-3">Products</h1>
                <h6 className=" text-sm mb-1 text-gray-200">Meta Trader 4</h6>
                <h6 className=" text-sm mb-1 text-gray-200">Meta Trader 5</h6>
                <h6 className=" text-sm mb-1 text-gray-200">Forex</h6>
                <h6 className=" text-sm mb-1 text-gray-200">Indices </h6>
                <h6 className=" text-sm mb-1 text-gray-200">Shares</h6>
              </div>
              <div className="w-3/6 flex flex-col justify-center items-start">
                <h1 className=" text-lg mb-3">Company</h1>
                <h6 className=" text-sm mb-1 text-gray-200">Abouts Us</h6>
                <h6 className=" text-sm mb-1 text-gray-200">Meet Team</h6>
                <h6 className=" text-sm mb-1 text-gray-200">News & Blogs</h6>
                <h6 className=" text-sm mb-1 text-gray-200">Careers</h6>
                <h6 className=" text-sm mb-1 text-gray-200">Contact Us</h6>
              </div>
            </div>
            <div className="max-sm:w-6/6 max-sm:mx-5  md:w-3/6 lg:w-1/3 mb-6 lg:mb-0 max-sm:mt-5">
              <div className="bg-gradient-to-r from-blue-500   to-red-500 p-6 rounded-lg text-center">
                {/* bg-gradient-to-r from-blue-500 to-purple-500 */}
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
                    className="w-full py-2 px-4 rounded-full btn-hover-gradient text-white font-bold"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-sm:mx-5  md:mx-10 lg:mx-28 md:flex lg:flex justify-between items-center border-t border-gray-700 pt-4">
          <p className="max-sm:text-sm max-sm:text-center">
            Copyright© 2024 MatajarGroup, All rights reserved.
          </p>
          <div className="flex  max-sm:justify-center max-sm:items-center max-sm:gap-4 max-sm:mt-3 max-sm:mb-5  md:space-x-4 ">
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
      </footer>

      {/* end */}
    </div>
  );
}

export default Footer;
