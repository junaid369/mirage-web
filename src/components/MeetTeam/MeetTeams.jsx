import React from "react";
import Footer from "../../components/Footer/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function MeetTeams() {
  const teamMembers = [
    {
      name: "John Anderson",
      title: "Chief Finavest Officer",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__04.jpg", // Replace with actual image path
    },
    {
      name: "Emily Davis",
      title: "Senior Trade Analyst",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__13.jpg", // Replace with actual image path
    },
    {
      name: "Christopher Clark",
      title: "Head of Market Research",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__13.jpg", // Replace with actual image path
    },
    {
      name: "Natalie Foster",
      title: "Trade Operations Manager",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__15.jpg", // Replace with actual image path
    },
    {
      name: "Natalie Foster",
      title: "Trade Operations Manager",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__12.jpg", // Replace with actual image path
    },
    {
      name: "Natalie Foster",
      title: "Trade Operations Manager",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__02.jpg", // Replace with actual image path
    },
    {
      name: "Natalie Foster",
      title: "Trade Operations Manager",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__10.jpg", // Replace with actual image path
    },
    {
      name: "Natalie Foster",
      title: "Trade Operations Manager",
      image:
        "https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__07.jpg", // Replace with actual image path
    },
  ];
  return (
    <div>
      <section className="mainbanner">
        <div
          className="relative  bg-cover bg-center mb-20"
          style={{
            height: "30em",

            backgroundImage:
              "url('https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/diverse-businesspeople-discussing-financial-profit-analyzing-stock-data.jpg')",
          }}
        >
          {/* Gradient overlay  */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div> */}
          {/* <div className="absolute inset-0   bg-gray-950 bg-opacity-20"></div> */}

          <div className="relative pt-64">
            <h1 className="text-center text-white text-5xl md:text-6xl font-semibold">
              Team
            </h1>
          </div>
          <h2 className="relative text-2xl text-white text-center pt-10 font-semibold">
            Empowering Traders with Innovative Solutions
          </h2>
          {/* <nav className="pt-6 flex justify-center">
            <ol className="flex text-white text-2xl font-serif">
              <li>
                <a href="/" className="hover:text-teal-800  font-bold">
                  Home
                </a>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white  text-2xl font-extrabold">Team</li>
            </ol>
          </nav> */}


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
      </section>

      {/* why choose us */}
      <section className="whychoose mx-32 max-sm:mx-5 mb-20">
        <h5 className="text-center gradient-text font-medium">WHY CHOOSE US</h5>
        <h1 className="mt-4  title gradient-text text-center text-4xl max-sm:text-2xl font-medium">
          {" "}
          Dedicated Support, Anytime,
        </h1>
        <h1 className="  title gradient-text text-center text-4xl  pt-2 font-medium max-sm:text-2xl">
          {" "}
          Anywhere
        </h1>
        <p className="text-center pt-10 text-md md:mx-80 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-0">
          <div className="bg-white p-6 rounded-md shadow-lg relative hover:border border-1 border-teal-600 max-sm:mb-8 h-60">
            <div className="bg-gradient-to-br from-blue-500   to-red-900 p-4 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
              <i className="mdi mdi-account-cog text-white text-4xl"></i>
            </div>
            <div className="pt-12">
              <h3 className="text-2xl font-semibold text-black text-center">
                Expertise and Experience
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Non odio lectus pharetra vel faucibus lorem
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg relative hover:border border-1 border-teal-600  max-sm:mb-8">
            <div className="bg-gradient-to-br from-blue-500   to-red-900 p-4 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
              <i className="mdi mdi-cellphone-cog text-white text-4xl"></i>
            </div>
            <div className="pt-12">
              <h3 className="text-2xl  text-center font-semibold text-black">
                Advanced Trading Technology
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Non odio lectus pharetra vel faucibus lorem
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg relative hover:border border-1 border-teal-600  max-sm:mb-8">
            <div className="bg-gradient-to-br from-blue-500   to-red-900 p-4 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
              <i className="mdi mdi-headphones text-white text-4xl"></i>
            </div>
            <div className="pt-12">
              <h3 className="text-2xl font-semibold text-black text-center">
                Comprehensive Support
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Non odio lectus pharetra vel faucibus lorem
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg relative hover:border border-1 border-teal-600  max-sm:mb-8">
            <div className="bg-gradient-to-br from-blue-500   to-red-900 p-4 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
              <i className="mdi mdi-cog-sync text-white text-4xl"></i>
            </div>
            <div className="pt-12">
              <h3 className="text-xl font-semibold text-black text-center">
                Customized Trading Solutions
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                Non odio lectus pharetra vel faucibus lorem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* end */}

      <section className="teamImages mx-32  max-sm:mx-5 mb-28">
        <div className="contents">
          <h6 className="description text-center text-sm gradient-text font-medium">
            PROFESSIONAL GUIDANCE
          </h6>
          <h1 className="title text-4xl text-center font-medium pt-6 max-sm:text-2xl gradient-text">
            Meet the Experts Behind Your Success
          </h1>
        </div>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 md:gap-10 mt-14 max-sm:flex flex-col max-sm:justify-center max-sm:items-center">
          {teamMembers.map((item, index) => {
            return (
              <div className="singleMember  shadow-md  w-72  max-sm:w-96 hover:border border-1 hover: border-teal-600  rounded-xl">
                <div className="flex  gap-3 max-sm:gap-10">
                  <div className="flex flex-col ml-4 mt-16">
                    <ul class="ekit_social_media ">
                      <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                        <a
                          href="https://facebook.com"
                          aria-label="Facebook"
                          class="facebook"
                        >
                          <FaInstagram className="text-teal-700" />
                        </a>
                      </li>
                      <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                        <a
                          href="https://facebook.com"
                          aria-label="Facebook"
                          class="facebook"
                        >
                          <FaFacebookF className="text-teal-700" />
                        </a>
                      </li>
                      <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                        <a
                          href="https://facebook.com"
                          aria-label="Facebook"
                          class="facebook"
                        >
                          <FaLinkedinIn className="text-teal-700" />
                        </a>
                      </li>
                      <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                        <a
                          href="https://facebook.com"
                          aria-label="Facebook"
                          class="facebook"
                        >
                          <FaXTwitter className="text-teal-700" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <img
                      src={item.image}
                      alt=""
                      className="rounded-full w-52 h-52"
                    />
                  </div>
                </div>
                <h1 className="text-xl text-black pt-5 text-center">
                  {item.name}
                </h1>
                <h6 className="gradient-text text-xl text-center mb-10">
                  {item.title}
                </h6>
              </div>
            );
          })}

          {/* <div className="singleMember  shadow-xl  w-72">
            <div className="flex  gap-3">
              <div className="flex flex-col ml-4 mt-16">
                <ul class="ekit_social_media ">
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaInstagram className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaFacebookF className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaLinkedinIn className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaLinkedinIn className="text-teal-700" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <img
                  src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__04.jpg"
                  alt=""
                  className="rounded-full w-52 h-52"
                />
              </div>
            </div>
            <h1 className="text-xl text-black pt-5 text-center">
              John Anderson
            </h1>
            <h6 className="text-teal-700 text-xl text-center mb-10">
              Chief Finavest Officer
            </h6>
          </div>
          <div className="singleMember  shadow-xl  w-72">
            <div className="flex  gap-3">
              <div className="flex flex-col ml-4 mt-16">
                <ul class="ekit_social_media ">
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaInstagram className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaFacebookF className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaLinkedinIn className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaLinkedinIn className="text-teal-700" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <img
                  src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__04.jpg"
                  alt=""
                  className="rounded-full w-52 h-52"
                />
              </div>
            </div>
            <h1 className="text-xl text-black pt-5 text-center">
              John Anderson
            </h1>
            <h6 className="text-teal-700 text-xl text-center mb-10">
              Chief Finavest Officer
            </h6>
          </div>
          <div className="singleMember  shadow-xl  w-72">
            <div className="flex  gap-3">
              <div className="flex flex-col ml-4 mt-16">
                <ul class="ekit_social_media ">
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaInstagram className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaFacebookF className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaLinkedinIn className="text-teal-700" />
                    </a>
                  </li>
                  <li className="border border-1 border-teal-700 rounded-full h-8 w-8 flex justify-center items-center mb-2">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      class="facebook"
                    >
                      <FaLinkedinIn className="text-teal-700" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <img
                  src="https://template.creativemox.com/finavest/wp-content/uploads/sites/11/2024/05/img__04.jpg"
                  alt=""
                  className="rounded-full w-52 h-52"
                />
              </div>
            </div>
            <h1 className="text-xl text-black pt-5 text-center">
              John Anderson
            </h1>
            <h6 className="text-teal-700 text-xl text-center mb-10">
              Chief Finavest Officer
            </h6>
          </div> */}
        </div>
        ;
      </section>

    </div>
  );
}

export default MeetTeams;
