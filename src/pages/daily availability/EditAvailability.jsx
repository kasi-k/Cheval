import React from "react";
import { IoClose } from "react-icons/io5";

const EditAvailability = ({ onclose }) => {
  return (
    <div className=" font-roboto-flex fixed inset-0  grid justify-center items-center  backdrop-blur-xs  ">
      <div className=" mx-2 shadow-lg dark:bg-popup-gray bg-white dark:text-white lg:w-[500px] md:w-[500px] w-96 rounded-lg  ">
        <div className="grid  ">
          <button
            onClick={onclose}
            className=" place-self-end dark:bg-popup-gray bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-5 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-bold text-xl py-2">Edit</h1>{" "}
          <form className=" my-5">
            <div className=" grid lg:grid-cols-12 md:grid-cols-12  items-center lg:gap-5 md:gap-5 gap-3 mb-6 mx-5">
              <label className="col-span-5 text-sm font-semibold">
                Vehicle Number
              </label>
              <input
                type="text"
                placeholder="Enter vehicle number"
                className="col-span-7  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg  h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Vehicle Type
              </label>
              <input
                type="text"
                placeholder="Enter vehicle type"
                className="col-span-7  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg  h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Current Location Pincode
              </label>
              <input
                type="text"
                placeholder="Enter pincode"
                className="col-span-7  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg  h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Preferred State
              </label>
              <input
                type="text"
                placeholder="Enter preferred state"
                className="col-span-7  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg  h-11 px-2 "
              />
              <div className="col-span-12 place-self-end">
                <button className="cursor-pointer  text-sidebar border-sidebar border px-6 py-1 rounded-sm">
                 Add District
                </button>
              </div>
              <label className="grid col-span-5 text-sm font-semibold  ">
                Preferred District 1
              </label>
              <input
                type="text"
                placeholder="Enter preferred district 1"
                className="col-span-7  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg  h-11 px-2 "
              />
            </div>

            <div className="   mx-5 flex justify-end gap-2 ">
              <button className="cursor-pointer  text-sidebar border-sidebar border px-8 py-2 rounded">
                Cancel
              </button>
              <button className=" cursor-pointer bg-sidebar dark:text-black px-6 py-2 rounded ">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAvailability;
