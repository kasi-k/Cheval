import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Logo from "../../assets/Cheval Logo.png";
const Headers = ({ Menus }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <p
        className="text-2xl md:hidden lg:hidden block"
        onClick={toggleDropdown}
      >
        <span className="flex items-center justify-center gap-2 text-black ">
          Menu
        </span>
      </p>

      {isDropdownOpen && (
        <div className="absolute  right-3 w-[395px]  dark:bg-black bg-white dark:text-white  shadow-md lg:hidden md:block block rounded-2xl">
          <div className="flex gap-2 justify-center  items-center pt-3 mx-3">
            <img src={Logo} alt="Logo Image" className=" w-60" />
          </div>
          <ul className="grid  justify-center items-center py-5 ">
            {Menus.map((menu, index) => (
              <NavLink to={menu.to} onClick={menu.onClick} key={index}>
                <li
                  className={`cursor-pointer text-md flex items-center rounded-md mx-1 p-2 mt-1 pl-3 transition-all duration-700 hover:bg-[#00ADBF] hover:font-semibold
                    ${
                      location.pathname && location.pathname.startsWith(menu.to)
                        ? "bg-[#00ADBF] font-semibold dark:text-black"
                        : "font-extralight"
                    }
                    `}
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center gap-x-6 px-2 ">
                    <div
                      className={`p-2 rounded-md transition-all duration-300 size-8  ${
                        location.pathname.startsWith(menu.to)
                          ? "bg-[#005D67] dark:text-white"
                          : "bg-[#282828]"
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

      <div className="flex justify-between">
        <NavBar Menus={Menus} />
      </div>
    </div>
  );
};

export default Headers;
