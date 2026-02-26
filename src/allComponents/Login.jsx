import { useForm } from "react-hook-form"

import { Button } from "@/allComponents/ui/button"
import { Input } from "@/allComponents/ui/input"
import { Label } from "@/allComponents/ui/label"
import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useContext } from "react"
import { DataContext } from "../Context/UserContext"


function Login(){

  const navigate = useNavigate()
    const { user, setUser} = useContext(DataContext);
  

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      console.log("Submitting login", data)
      const response = await axios.post("http://localhost:8000/api/v1/users/login", data)
      console.log(response.data) // Handle the response as needed
      // navigate or handle success here
      toast.success(`Welcome back, ${response.data.data.user.fullName}`);
      setUser(response.data.data);
      localStorage.setItem("user", JSON.stringify(response.data.data));

setTimeout(() => {
  navigate("/Dashboard");
}, 2000);
console.log("USER OBJECT:", user);
console.log("ACCESS TOKEN:", user?.accessToken);
    } catch (err) {
      console.error(err)
    }
  }

  return (
  <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-white">
    {/* Soft red glow accents */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/80 to-white/60 pointer-events-none"></div>
    <div className="absolute w-80 h-80 bg-red-500/10 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
    <div className="absolute w-80 h-80 bg-red-300/6 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

    {/* Login Card */}
    <div className="relative z-10 w-full max-w-4xl backdrop-blur-xl bg-white border border-red-50 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] animate-fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left Section */}
        <div
          className="hidden md:block relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-700/80 via-red-600/70 to-red-500/70 flex items-center justify-center p-8">
              <div className="text-white text-center animate-fade-in">
              <h3 className="text-3xl font-bold mb-3">
                Welcome Back 🚀
              </h3>
              <p className="text-sm opacity-90">
                Sign in to continue your journey with us.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
          <div className="p-8 md:p-12 bg-white backdrop-blur-md animate-fade-up">
          <header className="mb-8 text-center">
            <div className="bg-red-100 text-red-700 rounded-full h-14 w-14 mx-auto flex items-center justify-center shadow-md animate-bounce">
              <FaUser size={20} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">
              Sign In
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Access your account
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Username */}
            <div>
              <Label className="text-sm font-medium text-gray-700">
                Username or Email
              </Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaUser />
                </span>
                <Input
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  })}
                  required
                  className="pl-10 transition focus-visible:ring-red-400"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaLock />
                </span>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  required
                  className="pl-10 transition focus-visible:ring-red-400"
                  placeholder="Enter password"
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full theme-accent transition-all duration-300 shadow-lg"
              disabled={isSubmitting}
            >
              Sign In
            </Button>

            {/* Footer */}
            <footer className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/Signup")}
                className="text-red-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login