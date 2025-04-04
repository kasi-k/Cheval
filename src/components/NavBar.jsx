import React, { useState, useEffect, useRef } from "react";
import Toggle from "./Toggle";
import { Search, Bell } from "lucide-react";
import { useSearch } from "./SearchBar";
import Logout from "../pages/auth/Logout";
import EditProfile from "../pages/auth/EditProfile";

const NavBar = ({ pagetitle, title }) => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    setLogoutModal(true);
    setIsOpen(false);
  };
  const handleEditProfile = () => {
    setEditProfile(true);
    setIsOpen(false);
  };




  return (
    <>
    <div className="relative">
      <div className=" font-roboto-flex flex-wrap flex justify-between items-center text-sm mb-1.5 overflow-auto no-scrollbar">
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
          <p className=" flex  items-center gap-2 dark:text-amber-50 font-roboto-flex text-xs text-nowrap ">
            Profile name
            <span className="">
              <div className="">
                {/* Profile Picture Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white bg-popup-gray w-9 h-9 rounded-full flex items-center justify-center"
                >
                  KA
                </button>

                {/* Dropdown Menu */}
              </div>
            </span>
          </p>
          <div className="dark:text-white text-blue-400 mt-2 hidden ">
            <Toggle />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="  right-0 mt-2 w-48 bg-white shadow-lg rounded-md absolute z-50"
        >
          <div className="flex flex-col py-2">
            <button
            onClick={handleEditProfile}
              className="px-4 py-2 hover:bg-gray-200 text-black text-left"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-200 text-black text-left"
            >
              Logout
            </button>
            <button className="px-4 py-2 hover:bg-red-500 hover:text-white text-black text-left rounded-b-md">
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
    {logoutModal && <Logout onclose={() =>setLogoutModal(false)}/>}
     
    </>
  );
};

export default NavBar;
