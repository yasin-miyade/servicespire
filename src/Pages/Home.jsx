import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import Contactimg from "../assets/Contact.svg";
import Aboutimg from "../assets/About.svg";

function Home() {
  return (
    <>
      <Header />

      <section>
        <div className="cont">
          <div className="half-header bg-cyan-400 ">
            <div className=" text-center flex flex-col items-center justify-center ">
              <h1 className="text-7xl font-semibold">
                Service with a Purpose,
                <br /> Help with a Heart
              </h1>
              <p className="text-3xl mt-4 ">
                Your needs, our priority delivered with care
              </p>
              <Link
                to="about"
                className="text-white bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none mt-24"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 flex flex-col items-center justify-center py-20">
        <div className="conten flex justify-center">
          <div className="flex flex-col items-center justify-center mr-10">
            <h2 className="text-4xl font-semibold text-center">Our Services</h2>
            <p className="text-lg text-center mt-4">
              We provide a variety of services to help you with your needs.{" "}
              <br />
              Our services are designed to help you with your daily tasks and
              make your life easier.
            </p>
            <Link
              to="services"
              className="text-white bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none mt-8"
            >
              Learn More
            </Link>
          </div>
          <img
            src={Aboutimg}
            alt=""
            className="w-xl box-border shadow-2xl bg-white rounded-2xl hover:scale-105 transition-all duration-900 ease-in-out"
          />
        </div>
      </section>

      <section className="bg-gray-100 flex flex-col items-center justify-center py-20">
        <div className="content flex justify-center ">
          <img
            src={Contactimg}
            alt=""
            className="w-xl  h-fit shadow-2xl box-border rounded-2xl hover:scale-105 transition-all duration-900 ease-in-out"
          />
          <div className="flex flex-col items-center justify-center ml-10">
            <h2 className="text-4xl font-semibold text-center">Contact Us</h2>
            <p className="text-lg text-center mt-4">
              If you have any questions or need help, feel free to contact us.{" "}
              <br />
              Our team is always ready to help you with your needs.
            </p>
            <Link
              to="contact"
              className="text-white bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none mt-8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

          
      

      <Footer />
    </>
  );
}

export default Home;