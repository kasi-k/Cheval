import React from "react";
import NavBar from "../../components/NavBar";


const ViewSupport = () => {
  return (
    <>
        <NavBar title="Help & Support" pagetitle="View Ticket" />
      <div className="grid lg:grid-cols-12 md:grid-cols-12 gap-4 text-white ">
        <div className="bg-darkgray col-span-4 p-10 rounded-2xl space-y-4">
          <p className="font-bold text-base">Ticket Details</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-6">Ticket ID</p>
            <p className="col-span-1">₹2456</p>
            <p className="col-span-6">Created Date</p>
            <p className="col-span-1">21.02.2025</p>
          </div>
        </div>
        <div className="bg-darkgray col-span-4 rounded-2xl p-10  space-y-4">
          <p className="font-bold text-base">Priority</p>
          <div><p className=" font-light text-xs text-red-500 bg-red-200 py-1 rounded-sm w-16 text-center">High</p></div>
        </div>
        <div className="bg-darkgray col-span-4 rounded-2xl p-10  space-y-4">
          <p className="font-bold text-base">Category</p>
          <p className=" font-light text-xs">Delivery</p>
        </div>
        <div className="bg-darkgray col-span-4 p-10 rounded-2xl space-y-4 ">
          <p className="font-bold text-base">Assigned to</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-6">Vehicle Type</p>
            <p className="col-span-1">Truck</p>
          </div>
        </div>
        <div className="bg-darkgray col-span-4 p-10 rounded-2xl space-y-4">
          <p className="font-bold text-base">Last Updated</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-6">Date</p>
            <p className="col-span-1">21.02.2025</p>
          </div>
        </div>
        <div className="bg-darkgray col-span-4 rounded-2xl p-10  space-y-4">
          <p className="font-bold text-base">Status</p>
          <p className=" font-roboto-flex text-base text-green-600">Closed</p>
        </div>
      </div>
    </>
  );
};

export default ViewSupport;
