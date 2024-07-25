import React from "react";
import "../ContactUs/Contact.css";
import Footer from "../../components/Footer/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="mt-24 ">
      <div className="mainbanner  ">
        <div
          className="relative  bg-cover bg-center "
          style={{
            height: "30em",

            backgroundImage:
              "url('https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/modern-businessman-portrait-of-handsome-bearded-businessman-in-eyeglasses-working-with-laptop-while.jpg')",
          }}
        >
          {/* Gradient overlay  */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-900    to-transparent"></div> */}

          <div className="relative pt-64">
            <h1 className="text-center text-white text-5xl md:text-6xl font-semibold">
              Contact Us
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
              <li className="text-gray-300">Contact Us</li>
            </ol>
          </nav>
          {/* Gradient overlay  */}
        </div>
      </div>

      <div className="relative">
        {/* Background image and overlay */}
        <div className="absolute inset-0">
          <div
            className="relative bg-cover bg-center h-full"
            style={{
              backgroundImage:
                "url(https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/bg-3.png)",
            }}
          >
            <div className="absolute inset-0 bg-white opacity-60"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative  py-28 max-sm:py-14 ">
          <div className="md:flex max-lg:justify-center max-lg:items-center md:mx-36 lg:mx-36 md:mb-30 max-sm:mx-5">
            <div className="md:w-3.5/6 max-sm:mb-8">
              <h2 className="text-teal-800 font-semibold">GET IN TOUCH</h2>
              <div className="md:max-w:sm">
                <h1 className="max-sm:text-2xl  text-3xl font-serif   text-black  pt-6 md:max-w-md">
                  Connecting for a Stronger Financial Future
                </h1>
              </div>
              <p className="text-gray-600 mt-4">
                Nibh aptent tellus eget ridiculus viverra magnis leo tempor
                velit efficitur mattis
              </p>
            </div>
            <div className="md:w-2.5/6 md:grid grid-cols-3 items-center justify-center md:ml-20">
              <div className="text-center max-sm:mb-7 ">
                <div className="text-teal-800  flex flex-col items-center justify-center  mb-2">
                  <i
                    aria-hidden="true"
                    className="mdi mdi-map-marker text-5xl"
                  ></i>
                  <h3 className=" text-lg font-medium pt-5">Head Office</h3>
                </div>
                <p className="text-gray-600">
                  Jalan Cempaka Wangi No 22 Jakarta - Indonesia
                </p>
              </div>
              <div className="text-center max-sm:mb-7 ">
                <div className="text-teal-800 flex flex-col items-center justify-center mb-2">
                  <i aria-hidden="true" className="mdi mdi-email text-5xl"></i>
                  <h3 className="ml-2 text-lg font-medium pt-5">Email Us</h3>
                </div>
                <p className="text-gray-600">
                  support@yourdomain.tld
                  <br />
                  hello@yourdomain.tld
                </p>
              </div>
              <div className="text-center max-sm:mb-7">
                <div className="text-teal-800 flex flex-col  items-center justify-center mb-2">
                  <i
                    aria-hidden="true"
                    className="mdi mdi-phone-in-talk text-5xl"
                  ></i>
                  <h3 className="ml-2 text-lg font-medium pt-5">Let's Talk</h3>
                </div>
                <p className="text-gray-600">
                  Phone: +6221.2002.2012
                  <br />
                  Fax: +6221.2002.2013
                </p>
              </div>
            </div>
          </div>

          {/* form start */}

          <div className="md:mx-36 lg:mx-36 max-sm:mx-5 md:flex gap-3">
            <div className="mt-16  md:w-4/6">
              <div className="bg-white shadow-md rounded-lg md:p-8 max-sm:p-8 max-lg:p-28 h-full">
                <h2 className="text-3xl font-serif text-black">
                  Send us a message
                </h2>
                <p className="text-gray-600 mt-2">
                  Porta fames platea habitasse aliquet mus molestie conubia
                  ultrices lacus torquent augue sed dictum volutpat metus
                  maximus feugiat suscipit eleifend a letius sequis mod.
                </p>
                <form className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-lg:gap-14 ">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-3 border rounded-md bg-gray-200 max-lg:h-16"
                    />
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="p-3 border rounded-md bg-gray-200 max-lg:h-16"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="p-3 border rounded-md bg-gray-200  max-lg:h-16 max-lg:mb-14"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="p-3 border rounded-md bg-gray-200  max-lg:h-16  max-lg:mb-14"
                    />
                  </div>
                  <textarea
                    placeholder="Your Subject"
                    className="p-3 border rounded-md w-full  mt-4 bg-gray-200 max-lg:mb-14 max-lg:h-16"
                    rows="1"
                  ></textarea>
                  <textarea
                    placeholder="Your Message"
                    className="p-3 border rounded-md w-full mt-4 bg-gray-200 max-lg:mb-14 max-lg:h-16"
                    rows="5"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-teal-800 text-white px-6 py-3 rounded-md mt-4 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-2/6 mt-16">
              <div className="relative overflow-hidden">
                <img
                  className="object-contain transform transition-transform duration-300 ease-in-out hover:translate-x-6 hover:scale-105"
                  src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/im-so-glad-you-asked-shot-of-a-young-man-using-a-headset-and-computer-in-a-modern-office-.jpg"
                  alt=""
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-950 bg-opacity-30"></div>
                {/* Content */}
                <div className="absolute bottom-10 left-0 flex flex-col justify-center items-center w-full h-auto pb-4">
                  <h1 className="text-white text-3xl font-serif text-center">
                    Effortless Connectivity, Financial Growth.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex md:mx-28 max-sm:mx-5 justify-center items-center py-12 md:gap-5">
            <div className="title">
              <h1 className="text-black text-4xl  max-sm:text-2xl font-serif max-sm:text-center">
                Follow our social media
              </h1>
            </div>

            <hr className="border-black md:ml-6 md:mt-1  mt-4 w-40  max-sm:ml-28" />
            <div className="socialmedia icons flex justify-center items-center gap-4  max-sm:mt-5">
              <div className="border-teal-800 border-2 h-10 w-10 rounded-full flex justify-center items-center ">
                <a
                  href="
            "
                >
                  <FaFacebookF className="text-2xl text-teal-800" />
                </a>
              </div>
              <div className="border-teal-800 border-2 h-10 w-10 rounded-full flex justify-center items-center ">
                <a
                  href="
            "
                >
                  <FaXTwitter className="text-2xl text-teal-800" />
                </a>
              </div>
              <div className="border-teal-800 border-2 h-10 w-10 rounded-full flex justify-center items-center ">
                <a
                  href="
            "
                >
                  <FaLinkedinIn className="text-2xl text-teal-800" />
                </a>
              </div>
              <div className="border-teal-800 border-2 h-10 w-10 rounded-full flex justify-center items-center ">
                <a
                  href="
            "
                >
                  <FaInstagram className="text-2xl text-teal-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
