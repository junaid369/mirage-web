import React from "react";
import "../ContactUs/Contact.css";
import Footer from "../../components/Footer/Footer";

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
        <div className="relative container  py-44">
          <div className="md:flex md:mx-36 md:mb-30">
            <div className="md:w-2/6 max-sm:mb-8">
              <h2 className="text-teal-800 font-semibold">GET IN TOUCH</h2>
              <div className="max-w:sm">
                <h1 className="text-3xl font-serif text-black  pt-6">
                  Connecting for a Stronger Financial Future
                </h1>
              </div>
              <p className="text-gray-600 mt-4">
                Nibh aptent tellus eget ridiculus viverra magnis leo tempor
                velit efficitur mattis
              </p>
            </div>
            <div className="md:w-4/6 md:grid grid-cols-3 items-center justify-center md:ml-20">
              <div className="text-center max-sm:mb-7 ">
                <div className="text-teal-800  flex flex-col items-center justify-center  mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-6m-2-2H7a2 2 0 01-2-2V10a2 2 0 012-2h2m4-2V4a2 2 0 00-2-2H7a2 2 0 00-2 2v2m2 2h2a2 2 0 002-2V4m0 0H9a2 2 0 00-2 2v2"
                    />
                  </svg>
                  <h3 className=" text-lg font-medium pt-5">Head Office</h3>
                </div>
                <p className="text-gray-600">
                  Jalan Cempaka Wangi No 22 Jakarta - Indonesia
                </p>
              </div>
              <div className="text-center max-sm:mb-7 ">
                <div className="text-teal-800 flex flex-col items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 12H5a2 2 0 01-2-2V8m2-3l7.89 5.26a2 2 0 002.22 0L19 5z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 18.364l-.707-.707c-1.562-1.562-2.121-3.748-1.586-5.828A9.994 9.994 0 0112 5V3.005c-.294.03-.588.072-.882.126a9.993 9.993 0 00-7.516 7.516c-.054.294-.096.588-.126.882H5.12z"
                    />
                  </svg>
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

          <div className="mx-36 md:flex gap-3">
            <div className="mt-16  md:w-4/6">
              <div className="bg-white shadow-md rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-black">
                  Send us a message
                </h2>
                <p className="text-gray-600 mt-2">
                  Porta fames platea habitasse aliquet mus molestie conubia
                  ultrices lacus torquent augue sed dictum volutpat metus
                  maximus feugiat suscipit eleifend a letius sequis mod.
                </p>
                <form className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-3 border rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="p-3 border rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="p-3 border rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="p-3 border rounded-md"
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    className="p-3 border rounded-md w-full mt-4"
                    rows="5"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-teal-800 text-white px-6 py-3 rounded-md mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-2/6 mt-16">
              <div className="relative ">
                <img
                  className="object-contain"
                  src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/im-so-glad-you-asked-shot-of-a-young-man-using-a-headset-and-computer-in-a-modern-office-.jpg"
                  alt=""
                />
                <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                  <h1 className="text-white text-4xl">TEXT here</h1>
                </div>
              </div>

              {/* <div className="relative">
  <img
    className="object-contain w-full"
    src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/im-so-glad-you-asked-shot-of-a-young-man-using-a-headset-and-computer-in-a-modern-office-.jpg"
    alt=""
  />
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <h1 className="text-white text-2xl font-bold">TEXT here</h1>
  </div>
</div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
