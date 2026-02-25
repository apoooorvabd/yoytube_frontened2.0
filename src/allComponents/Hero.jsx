import React from "react";
import Navbar from "./Navbar";
import Card_for_vd0 from "./Card_for_vd0";
import AllVdo from "./AllVdo";
import UserDashboard from "./UserDashboard";

function Hero() {

  return (
    <div className="w-full min-h-screen bg-white z-10">
      
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="#Home" className="relative h-[30%] bg-gradient-to-r from-red-600 to-red-400 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-red-100">नव्य ईक्षण</span>
            </h1>
            <p className="text-lg mb-6 text-red-100/90">
              Create, share and explore amazing videos — now with a bold white & red theme.
            </p>

            
          </div>

          {/* Right Side (Video with image fallback) */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-lg mx-auto rounded-xl shadow-2xl overflow-hidden border-2 border-red-50">
              <video
                className="w-full h-full object-cover"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                autoPlay
                muted
                loop
                playsInline
                poster="/hero.jfif"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Video Cards Section */}
      <AllVdo />
      <section id="#About" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">About नव्य ईक्षण</h2>
          <p className="text-lg text-gray-700 mb-4">
            नव्य ईक्षण is a video sharing platform built with React and Shadcn UI. It allows users to create, share, and explore amazing videos. Whether you're a content creator or just looking for some great videos to watch, नव्य ईक्षण has something for everyone.
          </p>
          <p className="text-lg text-gray-700">
            Join our community today and start sharing your creativity with the world!
          </p>
        </div>

      </section>
      

    </div>
  );
}

export default Hero;
