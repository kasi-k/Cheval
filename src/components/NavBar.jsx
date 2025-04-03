import React, { useState, useEffect, useRef } from "react";
import Toggle from "./Toggle";
import { Search, Bell } from "lucide-react";
import { useSearch } from "./SearchBar";
import ProfileDropdown from "./ProfileDropDown";
import Logout from "../pages/auth/Logout";

const NavBar = ({ pagetitle, title }) => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [profileDropdown, setProfileDropDown] = useState(false);
   const [logoutModal, setLogoutModal] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const handleDropDown = () => {
    setProfileDropDown(!profileDropdown);
  };

  return (
    <>
      <div className="font-roboto-flex flex-wrap flex justify-between items-center text-sm mb-1.5 overflow-auto no-scrollbar">
        <div className="mx-2 dark:text-[#DBE9FF] space-y-1">
          <div className="flex gap-1 font-normal text-base">
            <p className="">{title}</p>/<p>{pagetitle}</p>
          </div>
          <p className="dark:text-white font-bold text-lg my-1">{title}</p>
        </div>

        <div className="flex justify-center lg:p-2 md:p-2 p-1.5 lg:gap-2 md:gap-2 gap-1.5 dark:bg-black bg-white items-center text-center rounded-full">
          <div className="text-amber-50 bg-popup-gray lg:px-8 md:px-4 px-1 py-1 rounded-full mx-1.5">
            <p className="text-xs font-medium">Wallet Balance</p>
            <p className="text-sidebar font-semibold">₹ 5000</p>
          </div>

          <p className="lg:mx-1 md:mx-1 mx-0 flex lg:gap-2 md:gap-2 gap-1.5 dark:bg-popup-gray bg-white dark:text-amber-50 text-black rounded-full items-center lg:p-2 md:p-2 p-1.5 dark:border-0 border">
            <Search className="size-5" />
            <input
              type="text"
              className="w-48 outline-0"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </p>
          <p className="text-amber-50 bg-popup-gray lg:p-2 md:p-2 p-1.5 rounded-full">
            <Bell className="size-5" />
          </p>
          <div className="dark:text-amber-50 font-roboto-flex text-xs text-nowrap relative">
            Profile name
            <span
              onClick={handleDropDown}
              className="text-amber-50 bg-popup-gray lg:p-2 md:p-2 p-1.5 mx-1.5 rounded-full cursor-pointer"
            >
              KA
            </span>
          </div>
          <div className="dark:text-white text-blue-400 mt-2 hidden ">
            <Toggle />
          </div>
        </div>
      </div>
    {profileDropdown && <ProfileDropdown setLogoutModal={setLogoutModal} setProfileDropDown={setProfileDropDown}/>}
      {logoutModal && <Logout onclose={()=>setLogoutModal(false)}/>}
    </>
  );
};

export default NavBar;
