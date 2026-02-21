import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../UserContext";

function Signup() {
  const { sigup, setSignup, login, setLogin } = useContext(DataContext);
  return (
    <div className="fixed top-0 right-0 h-screen w-[100vw] md:w-[100vw] bg-slate-50 z-50 transition-all 
    duration-500 ease-in-out overflow-y-auto">
        <div > 
        <h1 className="text-4xl font-bolder justify-center  text-gray-900 w-20 flex items-center bg-white rounded-lg shadow-lg p-2" 
        onClick={()=>setSignup(false)}>
            <FaArrowLeft className="inline-block mr-2 text-gray-600 cursor-pointer " />
        </h1>
        </div>        
        <div className=" flex justify-center h-auto w-full">
          
          <form className="w-[60%] max-w-md bg-white p-2 mt-2 mb-8 rounded-2xl shadow-2xl space-y-2">
        
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>

        {/* Avatar Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Avatar
          </label>
          <input
            type="file"
            className="w-full mt-1 text-sm"
          />
        </div>

        {/* Cover Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Cover Image
          </label>
          <input
            type="file"
            className="w-full mt-1 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline" onClick={()=>{setSignup(false); setLogin(true)}}>
            Login
          </span>
        </p>

             </form>
        </div>
    </div>
  );
}

export default Signup;