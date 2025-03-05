import React from "react";
import { IoClose } from "react-icons/io5";

const AddVehicle = ({ onclose }) => {
  return (
    <div className=" font-roboto-flex fixed inset-0  flex justify-center  items-center  backdrop-blur-xs ">
      <div className=" mx-2 shadow-lg dark:bg-popup-gray bg-white text-white  rounded-lg">
        <div className="grid  ">
          <button
            onClick={onclose}
            className=" place-self-end dark:bg-popup-gray bg-white  rounded-full lg:-mx-4 lg:-my-5 md:-my-5 md:-mx-4 my-1 mx-1 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center  font-bold text-xl">Add Vehicle</h1>{" "}
          <form className=" my-5">
            <div className=" grid lg:grid-cols-12 md:grid-cols-12  items-center gap-5 mb-6 mx-5">
              <label className="col-span-5 text-sm font-semibold">
                Vehicle Type
              </label>
              <input
                type="text"
                placeholder="Enter vehicle type"
                className="col-span-7  placeholder:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg w-68 h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Vehicle Model
              </label>
              <input
                type="text"
                placeholder="Enter vehicle Model"
                className="col-span-7 placeholder:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg w-68 h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Vehicle Owner
              </label>
              <input
                type="text"
                placeholder="Enter vehicle Owner"
                className="col-span-7 placeholder:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg w-68 h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Owner Phone
              </label>
              <input
                type="text"
                placeholder="Enter Owner Phone"
                className="col-span-7 placeholder:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg w-68 h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                Vehicle Number
              </label>
              <input
                type="text"
                placeholder="Enter vehicle Number"
                className="col-span-7  placeholder:text-white placeholder:text-xs placeholder:font-light  border border-gray-500 rounded-lg w-68 h-11 px-2 "
              />
              <label className="col-span-5 text-sm font-semibold  ">
                RC Number
              </label>
              <input
                type="text"
                placeholder="Enter Rc Number"
                className="col-span-7  placeholder:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg w-68 h-11 px-2 "
              />

              <label className="col-span-5  text-sm font-semibold">
                Insurance{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Insurance"
                className="col-span-7 placeholder:text-white placeholder:text-xs placeholder:font-light  border border-gray-500 rounded-lg   w-68  h-11 px-2 "
              />

              <label className="col-span-5 text-sm font-semibold ">
                Permit
              </label>
              <input
                type="text"
                placeholder="Enter Permit"
                className="col-span-7 placeholder:text-white placeholder:text-xs placeholder:font-light  border border-gray-500 rounded-lg w-68 h-11 px-3"
              />
            </div>

            <div className=" mx-5 flex justify-end gap-2 ">
              <button className="  text-sidebar border-sidebar border px-8 py-2 rounded">
                Cancel
              </button>
              <button className="bg-sidebar dark:text-black px-6 py-2 rounded ">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
