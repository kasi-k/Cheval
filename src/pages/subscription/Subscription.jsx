import React from "react";
import NavBar from "../../components/NavBar";

const Subscription = () => {
  return (
    <>
      <NavBar title="Subscription" pagetitle="View" />
      <div className="font-roboto-flex mx-2 grid grid-cols-12  gap-4 dark:text-white my-6">
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-base">Current Plan</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-5">Plan Name</p>
            <p className="col-span-1">Gold</p>
            <p className="col-span-5">Expired On</p>
            <p className="col-span-1">23.02.2025</p>
          </div>
        </div>
      </div>
      <p className="mx-2 font-roboto-flex font-bold text-[22px] text-white">
        Change Plan
      </p>
      <div className="font-roboto-flex mx-2 grid grid-cols-12  gap-4 dark:text-white my-6">
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-lg">SILVER</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-5">Duration</p>
            <p className="col-span-2">1 Year</p>
            <p className="col-span-5">Price</p>
            <p className="col-span-2">1000/-INR</p>
          </div>
          <button className="text-green-800 font-semibold text-sm bg-green-300 px-2 py-1.5 rounded-md">
            Subscribe Now
          </button>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-lg">GOLD</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-5">Duration</p>
            <p className="col-span-2">1 Year</p>
            <p className="col-span-5">Price</p>
            <p className="col-span-2">2000/-INR</p>
          </div>
          <button className="text-green-800 font-semibold text-sm bg-green-300 px-2 py-1.5 rounded-md">
            Subscribe Now
          </button>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-lg">DIAMOND</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-5">Duration</p>
            <p className="col-span-2">1 Year</p>
            <p className="col-span-5">Price</p>
            <p className="col-span-2">5000/-INR</p>
          </div>
          <button className="text-green-800 font-semibold text-sm bg-green-300 px-2 py-1.5 rounded-md">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
