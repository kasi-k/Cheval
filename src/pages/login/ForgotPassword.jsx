import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Cheval Logo.png";
import { ChevronLeft } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();

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
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-[500px]  absolute left-1/3 top-48 mx-6 ">
        <ChevronLeft onClick={()=>navigate("..")} className="bg-darkgray px-2 size-10 my-2 rounded-md" />
          <h1 className="text-5xl font-bold mb-4">Forgot Password ?</h1>
          <p className="text-sm font-light text-gray-400 mb-6">
            Enter your email so that we can send you password reset link
          </p>

          <label className="grid text-white my-4">
            Email / Phone Number
            <input
              type="text"
              className="bg-darkgray outline-none rounded-sm py-2 px-2 my-2"
              placeholder="Enter email or phone number"
            />
          </label>

          <button onClick = {() => navigate("/reset_password")}className=" cursor-pointer bg-sidebar text-black w-full py-2 my-4 rounded-md  font-semibold transition mt-6 ">
            Send Email
          </button>

          <p
            onClick={() => navigate("..")}
            className="text-center text-sm cursor-pointer "
          >
            Back to Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
