import React from "react";
import Navbar from "./Navbar";
import Card_for_vd0 from "./ui/Card_for_vd0";
import  allvdo  from "./allvdo" 
import AllVdo from "./AllVdo";

function Hero() {

  return (
    <div className="w-full min-h-screen bg-gray-100 z-10">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[30%] bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-yellow-300">शूनलिख</span>
            </h1>
            <p className="text-lg mb-6 text-gray-200">
              Create, share and explore amazing videos built with React & Shadcn UI.
            </p>

            
          </div>

          {/* Right Side (Optional Image Placeholder) */}
          <div className="flex-1">
            <img
              src="/hero.jfif"
              alt="Hero"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* Video Cards Section */}
      <AllVdo />
      

    </div>
  );
}

export default Hero;
