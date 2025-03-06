import React from "react";
import { IoClose } from "react-icons/io5";

const AddDriver = ({ onclose }) => {
  return (
    <div className=" font-roboto-flex fixed inset-0  grid justify-center items-center  backdrop-blur-xs  ">
      <div className=" mx-2 shadow-lg dark:bg-popup-gray bg-white dark:text-white  rounded-lg lg:w-[960px] md:w-[500px] w-96">
        <div className="grid  ">
          <button
            onClick={onclose}
            className=" place-self-end dark:bg-popup-gray bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-5 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-semibold text-2xl py-2">Add Driver</h1>{" "}
          <form>
            <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-6 py-6 ">
              <div className=" space-y-4">
                <p className="font-semibold text-xl">Driver Details</p>
                <div className=" grid grid-cols-9 items-center gap-4">
                  <label className="col-span-3 text-sm font-semibold">
                    Driver Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter driver name"
                    className="col-span-4  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg  lg:w-68 md:w-68 w-56  h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="col-span-4 placeholder:dark:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    License
                  </label>
                  <input
                    type="text"
                    placeholder="Enter license"
                    className="col-span-4 placeholder:dark:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    Experience
                  </label>
                  <input
                    type="text"
                    placeholder="Enter experience"
                    className="col-span-4 placeholder:dark:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                </div>
              </div>
              <div className=" space-y-4">
                <p className="font-semibold text-xl">Address</p>
                <div className=" grid grid-cols-9  items-center gap-4 ">
                  <label className="col-span-3 text-sm font-semibold">
                    Landmark
                  </label>
                  <input
                    type="text"
                    placeholder="Enter landmark"
                    className="col-span-4  placeholder:dark:text-white placeholder:text-xs placeholder:font-light border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="col-span-4 placeholder:dark:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    className="col-span-4 placeholder:dark:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Enter country"
                    className="col-span-4 placeholder:dark:text-white placeholder:text-xs placeholder:font-light   border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                  <label className="col-span-3 text-sm font-semibold  ">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    className="col-span-4  placeholder:dark:text-white placeholder:text-xs placeholder:font-light  border border-gray-500 rounded-lg lg:w-68 md:w-68 w-56 h-11 px-2 "
                  />
                </div>
              </div>
            </div>
            <div className="mx-5  flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
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

export default AddDriver;
