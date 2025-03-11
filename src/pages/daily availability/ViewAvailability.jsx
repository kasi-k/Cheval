import React, { useState } from "react";
import NavBar from "../../components/NavBar";

const ViewAvailability = () => {
  return (
    <>
      <NavBar title="Daily Availability" pagetitle="View" />
      <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-4 text-white pt-4">
        <div className="bg-darkgray col-span-6 p-10 rounded-2xl space-y-2">
          <p className="font-bold text-base">Vehicle Details</p>
          <div className="grid grid-cols-11  gap-2  text-xs">
            <p className="col-span-7 font-semibold">Vehicle Type</p>
            <p className="col-span-3 font-light">Truck</p>
            <p className="col-span-7 font-semibold">Vehicle Model</p>
            <p className="col-span-3 font-light">Number</p>
            <p className="col-span-7 font-semibold">Vehicle Owner</p>
            <p className="col-span-3 font-light">Name</p>
            <p className="col-span-7 font-semibold">Owner Number</p>
            <p className="col-span-3 font-light">987456130</p>
            <p className="col-span-7 font-semibold">Vehicle Number</p>
            <p className="col-span-3 font-light">000000</p>
            <p className="col-span-7 font-semibold">RC Number</p>
            <div className="space-y-2">
              <p className="col-span-3 font-light">4325617</p>{" "}
              <span className="text-nowrap font-light">RC Photo Copy</span>
            </div>

            <p className="col-span-7 font-semibold">Insurance</p>
            <div className="space-y-2">
              <p className="col-span-3 font-light">4325617qw</p>{" "}
              <span className="text-nowrap font-light">
                Insurance Photo Copy
              </span>
            </div>
            <p className="col-span-7 font-semibold">Permit</p>
            <p className="col-span-3 font-light">987456130</p>
          </div>
        </div>
        <div className="bg-darkgray col-span-6 rounded-2xl p-10 space-y-2">
          <p className="font-bold text-base">Location</p>
          <div className="grid grid-cols-11  gap-2  text-xs">
            <p className="col-span-7 font-semibold">Current Location Pincode</p>
            <p className="col-span-3 font-light">600000</p>
            <p className="col-span-7 font-semibold">Preferred State</p>
            <p className="col-span-3 font-light">Tamilnadu</p>
            <p className="col-span-7 font-semibold">Preferred District</p>
            <p className="col-span-3 font-light flex flex-col gap-1">
              {"Madurai, Coimbatore, Salem, Trichy"
                .split(",")
                .map((district, index) => (
                  <span key={index}>{district.trim()}</span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAvailability;
