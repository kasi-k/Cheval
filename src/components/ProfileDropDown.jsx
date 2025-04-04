import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
   const [logoutModal, setLogoutModal] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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

  // Edit Profile navigation
  const handleEditProfile = () => {
    navigate("/edit-profile");
    setIsOpen(false);
  };

  return (
    <>
    <div className="relative">
      {/* Profile Picture Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-popup-gray w-9 h-9 rounded-full flex items-center justify-center"
      >
        KA
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className=" absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 "
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
    </>
  );
};

export default ProfileDropdown;
