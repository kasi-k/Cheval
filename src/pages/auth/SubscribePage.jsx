import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Cheval Logo.png";
import { ChevronLeft } from "lucide-react";
import { Info } from "lucide-react";

const SubscribePage = () => {
  const navigate = useNavigate();

  const handleSubscription = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className=" font-roboto-flex h-screen grid grid-cols-2 relative">
     
        <div className="bg-darkgray">
          <img
            src={Logo}
            alt="Cheval Logo"
            className="w-52 absolute top-20 left-48"
          />
        </div>

        <div className="bg-sidebar">
          <div className="flex  absolute top-40 left-1/5 gap-6">
            <div className="bg-black text-white w-[450px]  p-8 rounded-lg shadow-lg text-center">
              <ChevronLeft
                onClick={() => navigate("/email_otpsignup")}
                className="bg-darkgray px-2 size-10 rounded-md"
              />
              <h1 className="text-4xl font-bold my-4">Try 7 Days Trial</h1>
              <p className="flex justify-center gap-2 text-lg font-semibold  mb-4">
                Trial Pack <Info />
              </p>
              <p className="text-lg font-normal text-gray-300 mb-6">
                Free ₹500 Wallet balance
              </p>
              <p className="text-2xl font-semibold">
                <span className="text-4xl font-bold">₹ 0 / </span>1 week
              </p>

              <button
                onClick={handleSubscription}
                className=" cursor-pointer bg-sidebar text-black w-72 py-2 my-8 rounded-md text-lg font-semibold transition duration-200 "
              >
                Start Trail Pack
              </button>
            </div>
            <div className="bg-black text-white w-[450px]  p-8 rounded-lg shadow-lg text-center">
              <ChevronLeft
                onClick={() => navigate("/email_otpsignup")}
                className="bg-darkgray px-2 size-10 rounded-md"
              />
              <h1 className="text-4xl font-bold my-4">Annual Subscription</h1>
              <p className="flex justify-center gap-2 text-lg font-semibold  mb-4">
                Broker Company <Info />
              </p>
              <p className="text-lg font-normal text-gray-300 mb-6">
                Recharge your Wallet (Refer FAQs)
              </p>
              <p className="text-2xl font-semibold">
                <span className="text-4xl font-bold">₹ 5000 / </span>1 year
              </p>

              <button
                onClick={handleSubscription}
                className="  cursor-pointer bg-sidebar text-black w-72 py-2 my-8 rounded-md text-lg font-semibold transition duration-200 "
              >
                Subscribe Annual Pack
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribePage;
