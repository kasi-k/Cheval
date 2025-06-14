import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/Cheval Logo.png";
import  Icon from "../../assets/Logo Icon.png";
const Headers = ({ Menus }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  

   

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <p
        className="text-2xl md:hidden lg:hidden block"
       
      >
        <span className="flex items-center justify-center">
        <img   onClick={toggleDropdown} src={Icon} alt="Icon Image" className="size-14 dark:bg-transparent bg-black rounded-full my-1" />
        </span>
      </p>

      {isDropdownOpen && (
        <div className="absolute   w-[395px] top-2 dark:bg-black bg-white dark:text-white text-gray-700  shadow-md lg:hidden md:hidden block rounded-2xl z-10">
          <div className="flex gap-2 justify-center  items-center pt-3 mx-3">
            <img src={Logo} alt="Logo Image" className=" w-60" />
          </div>
          <ul className="grid justify-center items-center py-5 ">
            {Menus.map((menu, index) => (
              <NavLink to={menu.to} onClick={menu.onClick} key={index}>
                <li
                  className={`cursor-pointer text-md flex w-[380px] items-center rounded-md mx-1 p-2 mt-1 pl-3 transition-all duration-700 hover:bg-sidebar hover:font-semibold
                    ${
                      location.pathname && location.pathname.startsWith(menu.to)
                        ? "bg-sidebar font-semibold dark:text-black"
                        : ""
                    }
                    `}
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center gap-x-6 px-2 ">
                    <div
                      className={`p-2 rounded-md transition-all duration-300 size-8  ${
                        location.pathname.startsWith(menu.to)
                          ? "bg-sidebar-icon  text-white"
                          : "bg-popup-gray text-white"
                      }`}
                    >
                      {menu.icon}{" "}
                    </div>
                    <span className="font-poppins text-lg  duration-300">
                      {menu.title}
                    </span>
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Headers;
