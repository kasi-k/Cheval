import React from "react";
import NavBar from "../../components/NavBar";
import { TbCalendarQuestion } from "react-icons/tb";

const NewEnquiry = () => {
  return (
    <>
      <NavBar title="Booking Enquiries" pagetitle="New" />
      <div className="font-roboto-flex ">
        <div className="flex justify-between mx-2 my-2">
          <p>
            Status:<span className="text-sky-500">New</span>
          </p>
          <button className="bg-sidebar w-52 py-2 flex items-center justify-center gap-2 rounded-sm">
            <TbCalendarQuestion /> <span className="">Bid Now</span>
          </button>
        </div>
        <div className="flex flex-col gap-2  dark:text-white">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3 bg-darkgray w-full h-32 rounded-2xl p-4">
              <p className="font-bold text-lg">Enquiry Details</p>
              <div className="grid grid-cols-10 my-2 items-center text-sm">
                <p className="col-span-5 font-semibold ">Enquiry Date</p>
                <p className="col-span-4 text-end font-light ">11 Feb 2025</p>
              </div>
              <div className="grid grid-cols-11 items-center text-sm">
                <p className="col-span-7 font-semibold ">Enquiry No</p>
                <p className="col-span-4 font-light -mx-2 ">#234568</p>
              </div>
            </div>
            <div className="col-span-3 bg-darkgray  rounded-2xl">
            <p className="font-bold text-lg">Booking Company Details</p>
              <div className="grid grid-cols-10 my-2 items-center text-sm">
                <p className="col-span-5 font-semibold ">Company Name</p>
                <p className="col-span-4 text-end font-light ">SwiftLogix</p>
              </div>
              <div className="grid grid-cols-11 items-center text-sm">
                <p className="col-span-7 font-semibold ">Shipping Date</p>
                <p className="col-span-4 font-light -mx-2 ">11 Feb 2025</p>
              </div>
            </div>
            <div className="col-span-3 bg-darkgray  rounded-2xl">3</div>
            <div className="col-span-3 bg-darkgray  rounded-2xl">4</div>
            <div className="col-span-4 bg-darkgray w-96 h-32  rounded-2xl">
              5
            </div>
            <div className="col-span-4 bg-darkgray  rounded-2xl">6</div>
            <div className="col-span-4 bg-darkgray rounded-2xl">7</div>
          </div>

          <p className="col-span-12 bg-darkgray h-72  rounded-2xl">
            Description
          </p>
        </div>
      </div>
    </>
  );
};

export default NewEnquiry;
