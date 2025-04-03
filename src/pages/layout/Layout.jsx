import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Headers from "./Headers";
import Logo from "../../assets/Cheval Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbCalendarQuestion } from "react-icons/tb"; //Booking Enquries
import { TbCalendarSearch } from "react-icons/tb"; //Booking
import { TbTableShare } from "react-icons/tb"; //Table Availabity
import { BiTrafficCone } from "react-icons/bi"; // Vehicle Management
import { FiUsers } from "react-icons/fi"; //Driver Management
import { FaFileInvoiceDollar } from "react-icons/fa6"; // Invoice & Payment
import { GoReport } from "react-icons/go"; // Report & Analysis
import { TbWallet } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Layout = () => {
  const location = useLocation();
  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard />, to: "/dashboard" },
    {
      title: "Booking Enquiries",
      icon: <TbCalendarQuestion />,
      to: "/booking_enquiries",
    },
    { title: "Booking", icon: <TbCalendarSearch />, to: "/bookings" },
    {
      title: "Daily Availability",
      icon: <TbTableShare />,
      to: "/daily_availability",
    },
    {
      title: "Vehicle Management",
      icon: <BiTrafficCone />,
      to: "/vehicle_management",
    },
    {
      title: "Driver Management",
      icon: <FiUsers />,
      to: "/driver_management",
    },
    {
      title: "Invoice & Payments",
      icon: <FaFileInvoiceDollar />,
      to: "/invoice_payments",
    },
    {
      title: "Reports & Analytics",
      icon: <GoReport />,
      to: "/reports_analytics",
    },

    { title: "Subscription", icon: <TbWallet />, to: "/subscription" },
    { title: "Settings", icon: <IoSettingsOutline />, to: "/settings" },
  ].filter(Boolean);

  return (
    <div className=" font-roboto-flex flex dark:bg-popup-gray bg-blue-400 lg:py-6 lg:pl-6 md:py-6 md:pl-6  w-full h-screen">
      {/* Sidebar */}
      <div className=" dark:bg-darkgray dark:text-white bg-white text-black rounded-xl h-full text-nowrap w-72 lg:block md:block hidden">
        <div className="flex justify-center my-2">
          <img src={Logo} alt="Logo Image" className="w-52" />
        </div>

        <div className="my-2 ">
          <ul className="pt-3">
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to} onClick={menu.onClick}>
                  <li
                    className={`cursor-pointer flex items-center rounded-md mx-1 p-2 mt-1 pl-3 transition-all duration-700 hover:bg-sidebar hover:font-semibold
                      ${
                        location.pathname &&
                        location.pathname.startsWith(menu.to)
                          ? "bg-sidebar font-semibold dark:text-black"
                          : ""
                      }
                      `}
                  >
                    <div className="flex items-center gap-x-2">
                      <div
                        className={`p-2 rounded-md transition-all duration-300 size-8  ${
                          location.pathname.startsWith(menu.to)
                            ? "bg-sidebar-icon dark:text-white text-white"
                            : "bg-popup-gray text-white"
                        }`}
                      >
                        {menu.icon}{" "}
                      </div>
                      <span className={`text-md flex-1 duration-3 `}>
                        {menu.title}
                      </span>
                    </div>
                  </li>
                </NavLink>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full overflow-auto mx-2 no-scrollbar">
        {/* Content Area */}
        <Headers Menus={Menus} />
        <div className="">
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
