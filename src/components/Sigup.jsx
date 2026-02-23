import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { DataContext } from "../UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const { setUser, setSignup } = useContext(DataContext);
  

  const handdleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      for (const pair of formData.entries()) {
        console.log("formData entry:", pair[0], pair[1]);
      }

      // Let the browser set the Content-Type with the proper boundary.
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData
      );
      console.log("Signup successful:", response.data);
      setUser(response.data.data);
      toast.success(`Welcome, ${response.data.data.fullName}! Your account has been created.`);
      setTimeout(() => {
          navigate("/Dashboard");
         }, 2000);
    
  
      
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  
  return (
    <div className="fixed top-0 right-0 h-screen w-[100vw] md:w-[100vw] bg-slate-50 z-50 transition-all 
    duration-500 ease-in-out overflow-y-auto">
        <div > 
        <h1 className="text-4xl font-bolder justify-center  text-gray-900 w-20 flex items-center bg-white rounded-lg shadow-lg p-2" 
        onClick={()=>setSignup(false)}>
            <FaArrowLeft className="inline-block mr-2 text-gray-600 cursor-pointer " />
        </h1>
        </div>        
        <div className=" flex justify-center h-auto w-full" >
          
          <form onSubmit={handdleSignup} className="w-[60%] max-w-md bg-white p-2 mt-2 mb-8 rounded-2xl shadow-2xl space-y-2">
        
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            name="username"
            required
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
            name="fullName"
            required
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
            name="email"
            required
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
            name="password"
            required
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
            name="avatar"
            required
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
            name="cover"
            required
            type="file"
            className="w-full mt-1 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline" onClick={()=>navigate("/login")}>
            Login
          </span>
        </p>

             </form>
        </div>
    </div>
  );
}

export default Signup;