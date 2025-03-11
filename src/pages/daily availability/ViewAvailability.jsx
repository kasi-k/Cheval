import React, { useState } from "react";
import NavBar from "../../components/NavBar";

const ViewAvailability = () => {
  return (
    <>
      <NavBar title="Daily Availability" pagetitle="View" />
      <div className="grid lg:grid-cols-12 md:grid-cols-12 gap-4 text-white">
        <div className="bg-darkgray col-span-6 p-10 rounded-2xl space-y-4">
          <p className="font-bold text-base">Vehicle Details</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-6">Vehicle Type</p>
            <p className="col-span-1">Truck</p>
            <p className="col-span-6">Vehicle Model</p>
            <p className="col-span-1">Number</p>
            <p className="col-span-6">Vehicle Owner</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-6">Owner Number</p>
            <p className="col-span-1">987456130</p>
            <p className="col-span-6">Vehicle Number</p>
            <p className="col-span-1">000000</p>
            <p className="col-span-6">RC Number</p>
            <p className="col-span-1">987456130</p>
            <p className="col-span-6">Insurance</p>
            <p className="col-span-1">987456130</p>
            <p className="col-span-6">Permit</p>
            <p className="col-span-1">987456130</p>
          </div>
        </div>
        <div className="bg-darkgray col-span-6 rounded-2xl p-10 space-y-4">
          <p className="font-bold text-base">Date</p>
          <p className=" font-light text-xs">21.02.2025</p>
        </div>
      </div>
    </>
  );
};

export default ViewAvailability;
