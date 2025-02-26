import React from "react";
import { useLocation } from "react-router-dom";
import Toggle from "./Toggle";

const NavBar = ({ Menus }) => {
  const location = useLocation();
  const activeMenu = Menus.find((menu) => menu.to === location.pathname);
  return (
    <div className=" font-roboto-flex flex-1 flex justify-between text-sm my-2">
      <div className="mx-2 text-[#DBE9FF] space-y-1">
        <div className="flex gap-1 font-normal">
          <p className=" "> {activeMenu ? activeMenu.title : ""}</p> /
          <p>{activeMenu ? activeMenu.title : ""}</p>
        </div>
        <p className="text-white font-semibold ">
          {activeMenu ? activeMenu.title : ""}
        </p>
      </div>

      <div className="flex gap-2 dark:text-white">
        <p>Search</p>
        <p>Notifications</p>
        <p>Profile name</p>
        <Toggle />
      </div>
    </div>
  );
};

export default NavBar;
