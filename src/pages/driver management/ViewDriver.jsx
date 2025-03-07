import React from "react";
import NavBar from "../../components/NavBar";
import StarProgress from "../../components/StarProgress";

const ViewDriver = () => {
  return (
    <>
      <NavBar title="Driver Management" pagetitle="Driver Details" />
      <div className="font-roboto-flex mx-2 grid lg:grid-cols-12 md:grid-cols-8  gap-4 dark:text-white my-6">
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">Driver Details</p>
          <div className="grid grid-cols-4 gap-4 font-light text-xs">
            <p className="col-span-3">Driver Name</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-3">Phone Number</p>
            <p className="col-span-1">000000000</p>
          </div>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl ">
          {" "}
          <p className="font-bold text-base">Experience</p>
          <p className="font-light text-xs">2 years</p>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white  row-span-2  rounded-2xl">
          <p className="font-bold text-base">Address</p>
          <div className="grid grid-cols-3 gap-2 font-light text-xs">
            <p className="col-span-2">Street</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-2">landmark</p>
            <p className="col-span-1">#23456</p>
            <p className="col-span-2">City</p>
            <p className="col-span-1">Chennai</p>
            <p className="col-span-2">State</p>
            <p className="col-span-1">Tamilnadu</p>
            <p className="col-span-2">Country</p>
            <p className="col-span-1">India</p>
            <p className="col-span-2">Pincode</p>
            <p className="col-span-1">600096</p>
          </div>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          {" "}
          <p className="font-bold text-base">License</p>
          <p className="font-light text-xs">Driver Name</p>
          <p className="font-light text-xs">Name</p>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          {" "}
          <p className="font-bold text-base">Ratings</p>
          <div className="flex gap-2 items-center font-light text-xs">
            <p className="">
              <StarProgress rating={3} />
            </p>
            <p className="">Ratings</p>
          </div>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-base">Trip Details</p>
          <div className="grid grid-cols-4 gap-4 font-light text-xs">
            <p className="col-span-3">Total Trips Completed</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-3">Distance Covered</p>
            <p className="col-span-1">Distance</p>
          </div>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-base">Earnings(Per Tip & Total)</p>
          <div className="grid grid-cols-4 gap-4 font-light text-xs">
            <p className="col-span-3">Per Trip</p>
            <p className="col-span-1">₹455 per Km</p>
            <p className="col-span-3">Totally Earned</p>
            <p className="col-span-1">₹45500</p>
          </div>
        </div>
        <div className="col-span-4 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          {" "}
          <p className="font-bold text-base">One Time Trips</p>
          <p className="font-light text-xs">Number</p>
        </div>
      </div>
    </>
  );
};

export default ViewDriver;
