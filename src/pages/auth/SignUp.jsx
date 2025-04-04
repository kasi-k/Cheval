import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Cheval Logo.png";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" font-roboto-flex h-screen grid grid-cols-2 relative">
        {/* Left Side - Logo */}
        <div className="bg-darkgray">
          <img
            src={Logo}
            alt="Cheval Logo"
            className="w-52 absolute top-20 left-48"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-teal-900">
          <div className="bg-black text-white w-[450px]  p-8 rounded-lg shadow-lg absolute top-36 left-1/3">
            <h1 className="text-5xl font-bold  my-4">Register</h1>
            <p className=" text-base font-extralight text-gray-100 mb-6">
              Enter your details to get Register to your account.
            </p>
            <label className="grid my-2">
              Company Name
              <input
                type="text"
                className="bg-darkgray outline-none rounded-sm py-2 px-2 my-1"
              />
            </label>
            <label className="grid my-2">
              Mobile Number
              <input
                type="text"
                className="bg-darkgray outline-none rounded-sm py-2 px-2 my-1"
              />
            </label>
            <label className="grid my-2">
              Email id
              <input
                type="text"
                className="bg-darkgray outline-none rounded-sm py-2 px-2 my-1"
              />
            </label>
            <button
              onClick={() => navigate("/phone_otpsignup")}
              className=" cursor-pointer bg-sidebar text-black w-full py-2 my-3 rounded-md text-lg font-semibold transition duration-200 "
            >
              Next
            </button>
            <p
              onClick={() => navigate("/login")}
              className="text-center cursor-pointer "
            >
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
