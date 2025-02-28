import React from "react";
import Toggle from "./Toggle";
import { Search, Bell } from "lucide-react";
import { useSearch } from "./SearchBar";

const NavBar = ({pagetitle, title}) => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className=" font-roboto-flex flex-1 flex-wrap flex justify-between items-center text-sm my-2 overflow-auto no-scrollbar">
      <div className="mx-2 dark:text-[#DBE9FF] space-y-1">
        <div className="flex gap-1 font-normal">
          <p className=" "> {title}</p>/
          <p>{pagetitle}</p>
        </div>
        <p className="dark:text-white font-semibold my-1 ">{title}</p>
      </div>

      <div className=" flex justify-center lg:p-2 md:p-2 p-1.5 lg:gap-2 md:gap-2 gap-1.5 dark:bg-black bg-white items-center text-center rounded-full ">
        <p className="lg:mx-1 md:mx-1 mx-0 flex  lg:gap-2 md:gap-2 gap-1.5 dark:bg-[#282828] bg-white dark:text-amber-50 text-black rounded-full items-center lg:p-2 md:p-2 p-1.5 dark:border-0 border">
          <Search className="size-5" />
          <input
            type="text"
            className="w-48 outline-0"
            placeholder="Search..."
            value={searchTerm} // Controlled input
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </p>
        <p className="text-amber-50 bg-[#282828] lg:p-2 md:p-2 p-1.5  rounded-full">
          <Bell className="size-5" />
        </p>
        <p className="dark:text-amber-50 font-roboto-flex text-xs text-nowrap">
          Profile name  Profile name
          <span className="text-amber-50 bg-[#282828] lg:p-2 md:p-2 p-1.5  mx-1.5 rounded-full">
            KA
          </span>
        </p>
        <div className="dark:text-white text-blue-400 ">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
