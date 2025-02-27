import React from "react";
import { useLocation } from "react-router-dom";
import Toggle from "./Toggle";
import { Search, Bell } from "lucide-react";

const NavBar = ({ Menus }) => {
  const location = useLocation();
  const activeMenu = Menus.find((menu) => menu.to === location.pathname);
  return (
    <div className=" font-roboto-flex flex-1 flex-wrap flex justify-between items-center text-sm my-2  ">
      <div className="mx-2 text-[#DBE9FF] space-y-1">
        <div className="flex gap-1 font-normal">
          <p className=" "> {activeMenu ? activeMenu.title : ""}</p>/
          <p>{activeMenu ? activeMenu.title : ""}</p>
        </div>
        <p className="text-white font-semibold ">
          {activeMenu ? activeMenu.title : ""}
        </p>
      </div>

      <div className=" flex justify-center p-2 lg:gap-2 md:gap-2  bg-black items-center text-center rounded-full">
        <p className="lg:mx-1 md:mx-1 mx-0 flex  lg:gap-2 md:gap-2 gap-1.5 bg-[#282828] text-amber-50 rounded-full items-center p-2">
          <Search size={20} />
          <input type="text" className="w-48 outline-0 " placeholder="Search" />
        </p>
        <p className="text-amber-50 bg-[#282828] p-2 rounded-full">
          <Bell size={20} />
        </p>
        <p className="text-amber-50 font-roboto-flex text-xs text-nowrap">
          Profile name
          <span className="text-amber-50 bg-[#282828] p-2 mx-1.5 rounded-full">
            KA
          </span>
        </p>
        <div className="dark:text-white hidden">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
