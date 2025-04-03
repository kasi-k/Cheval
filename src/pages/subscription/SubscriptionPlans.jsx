import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";


const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    localStorage.setItem("subscribed", "true");
    navigate("/subscription");
  };

  return (
    <>
      <NavBar title="Subscription" pagetitle="Subscription Plans" />
      <div className="flex items-center justify-center h-[500px] ">
        <div className="bg-black text-white w-[420px] h-[400px] p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-5xl font-bold text-center my-4">Premium</h1>
          <p className="text-center text-3xl font-medium text-gray-100">
            Booking Company
          </p>
          <p className="text-base font-normal text-gray-100 text-center my-4">
            ₹ 5000 min add to wallet. Every enquiry ₹ 10 detected from wallet
            based on vehicle type.
          </p>
          <h2 className="text-4xl font-semibold text-center my-6">
            ₹ 5000 / <span className="text-xl">1 year</span>
          </h2>
          <button
            onClick={handlePaymentSuccess}
            className="bg-sidebar text-black w-2/3 py-2  rounded-md text-lg font-semibold transition duration-200 "
          >
            Pay now
          </button>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlans;
