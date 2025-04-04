import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Cheval Logo.png";


const PasswordChange = () => {
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
        <div className="bg-black text-white p-8 rounded-lg shadow-lg  absolute left-1/3 top-48 mx-6">
          <h1 className="text-5xl font-bold mb-4">Password Changed !</h1>
          <p className="text-sm font-light text-gray-400 mb-6">
            You've Successfully Reset Your Password !
          </p>

          <button
            onClick={() => navigate("/login", { state: { fromPasswordChange: true } })}
            className=" cursor-pointer bg-sidebar text-black w-full py-2 my-4 rounded-md text-lg font-semibold transition "
          >
            Login In Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
