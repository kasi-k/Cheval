import React from "react";
import NavBar from "../../components/NavBar";

const ViewVehicle = () => {
  return (
    <>
      <NavBar title="Vehicle Management" pagetitle="Vehicle Details" />
      <div className="font-roboto-flex mx-2 grid lg:grid-cols-12 md:grid-cols-9 grid-cols-3 gap-4 dark:text-white my-6">
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36  rounded-2xl">
          <p className="font-bold text-base">Vehicle Type</p>
          <p className="font-light text-xs">Truck</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl ">
          {" "}
          <p className="font-bold text-base">Vehicle Model</p>
          <p className="font-light text-xs">Number</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl">
          {" "}
          <p className="font-bold text-base">Vehicle Owner</p>
          <p className="font-light text-xs">Name</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl">
          {" "}
          <p className="font-bold text-base">Owner Phone</p>
          <p className="font-light text-xs">00000000</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl">
          {" "}
          <p className="font-bold text-base">Vehicle Number</p>
          <p className="font-light text-xs">Number</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl">
          {" "}
          <p className="font-bold text-base">RC Number</p>
          <p className="font-light text-xs">4326781</p>
          <p className="font-light text-xs"> RC Photo Copy</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl">
          {" "}
          <p className="font-bold text-base">Insurance</p>
          <p className="font-light text-xs">7895qwetr</p>
          <p className="font-light text-xs">Insurance Photo Copy</p>
        </div>
        <div className="col-span-3 p-6 space-y-4 dark:bg-darkgray bg-white  h-36 w-full rounded-2xl">
          {" "}
          <p className="font-bold text-base">Permit</p>
          <p className="font-light text-xs">Number</p>
        </div>
      </div>
    </>
  );
};

export default ViewVehicle;
