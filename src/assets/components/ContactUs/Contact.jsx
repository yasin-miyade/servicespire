import MainHeader from "../Header/Main-header.jsx"
// import {FaFacebook, FaInstagram, FaGoogle} from "react-icons/fa6"
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
    <div className=" py-10 px-6 md:px-20 w-auto h-screen bg-gray-100">
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
              
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" p-6 rounded-2xl -m-32 mr-10 ml-18 bg-white " style={{border : "1px solid #d8dae0"}}>
          <h1 className="text-center text-3xl p-10">CONTACT <span className="text-cyan-600"> US</span></h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-neutral-400 border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-neutral-400 border"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3  rounded-lg border-neutral-400 border"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3  rounded-lg border-neutral-400 border"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold border-neutral-400 border"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum pariatur beatae nihil amet modi quae maxime rerum ad qui delectus. Laboriosam cum perspiciatis repudiandae doloribus. Inventore magni quo, assumenda nam eos cupiditate consectetur quasi praesentium consequuntur expedita ullam omnis, vitae voluptatum nostrum blanditiis? Nisi optio itaque voluptate distinctio, iste, suscipit iure ducimus officia, vel ipsa facilis expedita dicta? Repudiandae dignissimos doloremque pariatur facilis quod iure, rem doloribus! Inventore debitis expedita quis molestias corporis optio aspernatur quaerat facilis odio laboriosam commodi eaque dolore vero, quam eligendi fuga saepe nostrum nobis, id ut sequi voluptates dolorem deserunt? Nulla iure illum eum consequuntur?
    </>
    
  );
};

export default ContactForm;