import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import BookingReport from "./BookingReport";

const ViewBooking = () => {
    const [back, setBack] = useState(false)

    const handleBack = () =>{
        setBack(true)
    }
  return (
    <>
    {back ? <BookingReport/> :(
    <div>
      <div className="grid lg:grid-cols-12 md:grid-cols-12 gap-4 text-white ">
        <div className="bg-darkgray col-span-6 p-10 rounded-2xl space-y-4">
          <p className="font-bold text-base">Booking Report</p>
          <div className="grid grid-cols-8 gap-2 font-light text-xs">
            <p className="col-span-6">Bid Accepted</p>
            <p className="col-span-1">₹346</p>
            <p className="col-span-6">Bids Amount</p>
            <p className="col-span-1">₹346</p>
            <p className="col-span-6">Payment Collected</p>
            <p className="col-span-1">₹346</p>
            <p className="col-span-6">Payment Balance</p>
            <p className="col-span-1">₹346</p>
          </div>
        </div>
        <div className="bg-darkgray col-span-6 rounded-2xl p-10  space-y-4">
          <p className="font-bold text-base">Date</p>
          <p className=" font-light text-xs">21.02.2025</p>
        </div>
      </div>

      <div onClick={handleBack} className=" absolute bottom-16 mx-2 flex items-center bg-sidebar rounded-lg px-4 py-2 gap-2">
        <IoMdArrowRoundBack className="size-4" />
        <p className="font-bold text-base">Back</p>
      </div>
      </div>
      )}
    </>
  );
};

export default ViewBooking;
