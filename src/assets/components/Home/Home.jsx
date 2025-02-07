import React from "react";
import Homes from './Homes.svg'
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Home() {
  return (
    <>
      
    <Header/>
    <section>
        <div className="content">
          <div className="half-header bg-cyan-500 ">
            <div className="text-white text-center flex flex-col items-center justify-center ">
              <h1 className="text-7xl font-semibold">Service with a Purpose,<br /> Help with a Heart</h1>
              <p className="text-3xl mt-4 ">
              Your needs, our priority—delivered with care
              </p>
              <Link
                to="about"
                className="text-white bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none mt-24"
              >
                Read More
              </Link>
            </div>
          </div>
          <img src={Homes} alt="home" className="-mt-28"/>

            
        </div>
        </section>
          
          
        <section>
          
        </section>
        <Footer/>

    </>
  );
}
