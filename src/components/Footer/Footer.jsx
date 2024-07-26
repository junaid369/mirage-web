import React from "react";

function Footer() {
  return (
    <div>
      {/* footer */}
      <footer className="bg-black text-white py-8 max-sm:hidden">
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
                <div className="bg-white h-20 w-36    ">
                  <img
                    // className="  w-44"
                    className="h-20 w-36  object-cover"
                    // src=" https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/Logo-Utama-DUA-white.png"
                    src="https://true-blue-movers.s3.amazonaws.com/Mirage.png"
                    alt=""
                  />
                </div>
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
                    <div className="serach icon btn-gradient h-12  w-14 flex items-center justify-center">
                      <span class="mdi mdi-magnify text-4xl"></span>
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
      </footer>

      {/* end */}
    </div>
  );
}

export default Footer;
