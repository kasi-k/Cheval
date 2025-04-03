import { React, useState } from "react";
import { IoClose } from "react-icons/io5";
import LogOut from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const Logout = ({ onclose }) => {
    const navigate = useNavigate();
  return (
    <>
      <div className=" font-roboto-flex fixed inset-0 flex justify-center  items-center backdrop-blur-sm drop-shadow-lg ">
        <div className=" dark:bg-popup-gray bg-black text-white rounded-sm ">
          <button
            onClick={onclose}
            className="grid place-self-end -mx-4 -my-4 bg-popup-gray py-2 px-2 rounded-full "
          >
            <IoClose className="size-[24px]" />
          </button>
          <div className="grid justify-center px-6 py-4 gap-6">
            <span className="place-self-center mt-6">
              <img src={LogOut} alt="Logout Image" className="w-28" />
            </span>
            <p className="text-center font-semibold text-2xl">Logout</p>
            <p className="w-64 text-center font-normal text-sm">
              "Are you sure you want to log out of your account?"
            </p>
          </div>
          <div className="flex justify-center gap-6 my-6 text-sm font-normal">
            <button
              className=" cursor-pointer text-white  border border-white px-6 py-1.5 rounded-sm"
              onClick={onclose}
            >
              Cancel
            </button>
            <button onClick={()=>navigate("/login")} className=" cursor-pointer dark:text-white bg-sidebar px-6 py-1.5 rounded-sm ">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
