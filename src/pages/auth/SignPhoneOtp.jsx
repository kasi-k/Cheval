import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Cheval Logo.png";
import OtpInput from "react-otp-input";
import { ChevronLeft } from "lucide-react";

const SignPhoneOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(""); // State for OTP input
  const [timer, setTimer] = useState(30); // Countdown timer state
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Resend button control

  // Countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false); // Enable resend button when timer hits 0
    }
  }, [timer]);

  // Handle OTP submission
  const handleLogin = () => {
    navigate("/email_otpsignup");
  };

  // Handle resend OTP
  const handleResendOtp = () => {
    setTimer(30); // Restart the timer
    setIsResendDisabled(true); // Disable resend button
    // Call API to resend OTP (if applicable)
    console.log("Resending OTP...");
  };

  return (
    <div className="font-roboto-flex h-screen grid grid-cols-2 relative">
      {/* Left Side - Logo */}
      <div className="bg-darkgray">
        <img
          src={Logo}
          alt="Cheval Logo"
          className="w-52 absolute top-20 left-48"
        />
      </div>

      {/* Right Side - OTP Input */}
      <div className="bg-teal-900">
        <div className="bg-black text-white w-[450px] p-8 rounded-lg shadow-lg absolute top-36 left-1/3">
          <ChevronLeft
            onClick={() => navigate("..")}
            className="bg-darkgray px-2 size-10 rounded-md cursor-pointer"
          />
          <h1 className="text-4xl font-bold my-4">Phone Verification</h1>
          <p className="text-base font-extralight text-gray-100 mb-6">
            We have sent you an OTP (One-time password) to your phone number.
          </p>

          {/* OTP Input Field */}
          <label className="font-semibold">
            OTP
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "40px",
                height: "45px",
                background: "#282828",
                borderRadius: "6px",
                margin: "6px",
                outline: "none",
                textAlign: "center",
                fontSize: "20px",
                color: "white",
              }}
            />
          </label>

          <button
            onClick={handleLogin}
            className="cursor-pointer bg-sidebar text-black w-full py-2 my-8 rounded-md text-lg font-semibold transition duration-200"
          >
            Continue
          </button>

          {/* Dynamic Resend Timer */}
          <p className="text-center text-sm">
            {isResendDisabled ? (
              `Resend in 00:${timer}s`
            ) : (
              <span
                onClick={handleResendOtp}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                Resend OTP
              </span>
            )}
          </p>

          <p className="text-center my-2 text-sm">Change Phone Number</p>
        </div>
      </div>
    </div>
  );
};

export default SignPhoneOtp;
