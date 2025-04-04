import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye } from "react-icons/io5";
import Logo from "../../assets/Cheval Logo.png";

const Login = () => {
  const location = useLocation();
  const headingText = location.state?.fromPasswordChange ? "Welcome Back!" : "Login";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" font-roboto-flex h-screen grid grid-cols-2 relative">
      {/* Left Side - Logo */}
      <div className="bg-darkgray">
        <img src={Logo} alt="Cheval Logo" className="w-52 absolute top-20 left-48" />
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-teal-900">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-[500px] absolute left-1/3 top-48 mx-6">
          <h1 className="text-5xl font-bold mb-4">{headingText}</h1>
          <p className="text-sm font-light text-gray-400 mb-6">
            Enter your details to log in to your account.
          </p>

          {/* Email/Phone Input */}
          <label className="grid text-white mb-4">
            Email / Phone Number
            <input
              type="text"
              className="bg-darkgray outline-none rounded-sm py-2 px-2 my-1"
              placeholder="Enter email or phone number"
            />
          </label>

          {/* Password Input */}
          <label className="grid text-white relative">
            Password
            <input
              type={showPassword ? "text" : "password"}
              className="bg-darkgray outline-none rounded-sm py-2 px-2  pr-10"
              placeholder="Enter password"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </label>

          <p onClick={()=>navigate("/forgot_password")} className="text-right text-sm cursor-pointer hover:underline mt-2">
            Forgot Password?
          </p>

          {/* Login Button */}
          <button onClick={()=>navigate("/dashboard")} className=" cursor-pointer bg-sidebar text-black w-full py-2 my-4 rounded-md text-lg font-semibold transition ">
            Login
          </button>

          <p
            onClick={() => navigate("..")}
            className="text-center text-sm cursor-pointer hover:underline"
          >
            Don’t have an account? <span className="font-semibold">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
