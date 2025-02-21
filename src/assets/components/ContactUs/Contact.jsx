// import React from 'react'
import MainHeader from "../Header/Header.jsx"
import {FaFacebook, FaInstagram, FaGoogle} from "react-icons/fa6"
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <>
        
    <div className="">
    <MainHeader/>
    <div className=" py-10 px-6 md:px-20 w-auto h-screen ">
      <h2 className="text-3xl font-bold mt-32 w-90 ml-18">GET IN TOUCH WITH US</h2>
      <p className="text-gray-400 mt-2 w-96 ml-18">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {/* Contact Info */}
        <div>
          <div className="flex items-center space-x-4 mb-4 ml-18">
            <span className="text-blue-400 text-xl">📍</span>
            <p>
              <strong>Our Location</strong> <br />
              99 S.t Jomblo Park Pekanbaru <br />
              28292, Indonesia
            </p>
          </div>
          <div className="flex items-center space-x-4 mb-4 ml-18">
            <span className="text-blue-400 text-xl">📞</span>
            <p>
              <strong>Phone Number</strong> <br />
              (+62)81 414 257 9980
            </p>
          </div>
          <div className="flex items-center space-x-4 ml-18">
            <span className="text-blue-400 text-xl">✉</span>
            <p>
              <strong>Email Address</strong> <br />
              info@yourdomain.com
              <FaFacebook size={30} color="blue"/>
              
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" shadow-2xl p-6 rounded-lg -m-32 mr-10 ml-18 ">
          <h1 className="flex justify-center text-3xl p-10">CONTACT</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3  rounded-lg border"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3  rounded-lg border"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactForm;