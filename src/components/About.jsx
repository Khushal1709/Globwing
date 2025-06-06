import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.svg"; // Logo image
import Product from "../image/Product.svg";
import Agri from "../image/Agri.jpg";
import map from "../image/map.svg";
import {
  FaQuoteLeft,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaPaperPlane,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Section */}
      <nav
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Product})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Globwing logo" className="h-13 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-semibold">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/About" className="hover:text-blue-400">
                About us
              </Link>
              <Link to="/Product" className="hover:text-blue-400">
                Product
              </Link>
              <Link to="/Export" className="hover:text-blue-400">
                Export
              </Link>
              <Link to="/Download" className="hover:text-blue-400">
                Download
              </Link>
            </div>

            {/* Contact Button */}
            <Link
              to="/Contact"
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Contact us
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4 font-semibold text-gray-800">
              <Link to="/" className="block hover:text-blue-600">
                Home
              </Link>
              <Link to="/About" className="block hover:text-blue-600">
                About us
              </Link>
              <Link to="/Product" className="block hover:text-blue-600">
                Product
              </Link>
              <Link to="/Export" className="block hover:text-blue-600">
                Export
              </Link>
              <Link to="/Download" className="block hover:text-blue-600">
                Download
              </Link>
              <Link
                to="/Contact"
                className="w-full block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-center"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="py-20 md:py-40 lg:py-60 px-6 md:px-10">
          <h1
            className="text-white text-5xl md:text-7xl font-bold mt-6"
            style={{ fontFamily: "Frank Ruhl Libre" }}
          >
            About Us
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            Driving global growth with premium products for Agriculture and livestock.
          </p>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="w-4/6 mx-auto">
            <img src={Agri} alt="Agriculture Products" className="shadow-lg rounded-lg" />
          </div>

          {/* Text Content Section */}
          <div className="text-gray-700">
            <h4 className="text-[#3270DF] font-semibold text-2xl mb-2">About Us</h4>
            <h3 className="text-[#3270DF] font-bold text-4xl">Agriculture Solutions</h3>
            <p className="mt-4 text-lg text-black">
              At Globwing, we are dedicated to transforming the agricultural landscape with
              innovative, sustainable, and smart farming solutions. From precision agriculture tools
              to eco-friendly farming practices, we empower farmers with the resources they need to
              improve productivity, reduce costs, and cultivate a greener future.
            </p>
            <p className="mt-4 font-semibold text-lg">🌱 Our Vision</p>
            <p className="text-black">
              To be a global leader in sustainable agriculture, fostering a future where advanced
              technology and nature work hand in hand to feed the world responsibly.
            </p>
            <p className="mt-4 font-semibold text-lg">🚜 Our Mission</p>
            <p className="text-black">
              To deliver cutting-edge agricultural solutions that enhance crop yield and soil health.<br />
              To support farmers with tools and knowledge that promote eco-conscious farming.<br />
              To build a resilient and sustainable agriculture ecosystem through innovation,
              education, and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
     <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden p-4 md:p-8 gap-8 container mx-auto my-12">
        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-[#3270DF] mb-2">
            Have Questions?
          </h2>
          <h1 className="text-3xl font-bold text-[#3270DF] mb-4">
            We're Here to Help!
          </h1>

          <form className="space-y-4">
            {["Your Name", "Your Email", "Phone"].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                className="w-full p-3 border rounded focus:ring focus:ring-blue-200"
              />
            ))}

            <select className="w-full p-3 border rounded focus:ring focus:ring-blue-200">
              <option>Choose Subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Sales</option>
            </select>

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded focus:ring focus:ring-blue-200"
            ></textarea>

            <div className="flex items-center">
              <input type="checkbox" id="robot" className="mr-2" />
              <label htmlFor="robot" className="text-sm">
                I AM Not a Robot
              </label>
            </div>

            <button className="w-full bg-[#3270DF] text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="md:w-1/2 w-full">
          <div className="w-full h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.821663228372!2d72.8775692758764!3d21.238919280526044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f705dffe915%3A0x1fc83e2ebcf890f5!2sTulsi%20Arcade!5e0!3m2!1sen!2sin!4v1748606234142!5m2!1sen!2sin"
              className="w-full h-full rounded"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Newsletter Section */}
      <div className="bg-[#3270DF] text-white p-6 flex flex-col md:flex-row justify-between items-center w-full mb-3">
        <h2 className="text-lg font-semibold mb-4 md:mb-0">Connect with Us for Business Solutions</h2>
        <div className="flex items-center bg-white p-2 w-full md:w-auto rounded-lg">
          <input
            type="email"
            placeholder="Enter Mail"
            className="px-4 py-2 outline-none text-black w-full"
          />
          <button className="bg-[#3270DF] text-white p-2 rounded-lg">
            <FaPaperPlane size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
