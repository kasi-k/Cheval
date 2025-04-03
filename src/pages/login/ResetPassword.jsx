import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye } from "react-icons/io5";
import Logo from "../../assets/Cheval Logo.png";
import { ChevronLeft } from 'lucide-react';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" font-roboto-flex h-screen grid grid-cols-2 relative">
      <div className="bg-darkgray">
        <img
          src={Logo}
          alt="Cheval Logo"
          className="w-52 absolute top-20 left-48"
        />
      </div>

      <div className="bg-teal-900">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-[500px] absolute left-1/3 top-48 mx-6 space-y-4">
        <ChevronLeft onClick={()=>navigate("/forgot_password")} className="bg-darkgray px-2 size-10 my-2 rounded-md" />
          <h1 className="text-5xl font-bold mb-4">Reset Password</h1>
          <p className="text-sm font-light text-gray-400 mb-6">
            Please kindly set your new password.
          </p>

          <label className="grid text-white relative ">
            New Password
            <input
              type={showPassword ? "text" : "password"}
              className="bg-darkgray outline-none rounded-sm py-2 px-2 my-2  pr-10"
              placeholder="Enter password"
            />
            <span
              className="absolute right-3 top-11 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </label>
          <label className="grid text-white relative">
            Reset Password
            <input
              type={showPassword ? "text" : "password"}
              className="bg-darkgray outline-none rounded-sm py-2 px-2 my-2  pr-10"
              placeholder="Enter password"
            />
            <span
              className="absolute right-3 top-11 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </label>

          <button
            onClick={() => navigate("/password_changed")}
            className=" cursor-pointer bg-sidebar text-black w-full py-2 my-4 rounded-md text-lg font-semibold transition "
          >
            Confirm Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
