import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Pagination from "../../components/Pagination";
import { BiFilterAlt } from "react-icons/bi";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";
import { RoleData } from "../../components/Data";
import { Navigate, useNavigate } from "react-router-dom";

const Settings = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(RoleData); // Show all data if search is empty
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();

    const filtered = RoleData.filter((item) =>
      Object.values(item).some((value) => {
        const lowerValue = value.toString().toLowerCase();

        // ✅ Exact match first
        if (lowerValue === lowerSearchTerm) return true;

        // ✅ Special handling for numbers
        if (!isNaN(searchTerm) && lowerValue.includes(searchTerm)) return true;

        // ✅ Progressive search (matches starting values)
        return lowerValue.startsWith(lowerSearchTerm);
      })
    );

    setFilteredData(filtered);
    setCurrentPage(1); // ✅ Reset to first page after search
  }, [searchTerm]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
 const handleRoleAccessLevel = () =>{
  navigate("roleaccess")
 }


  return (
    <>
      <NavBar title="Settings" pagetitle="Access Levels" />
      <div className="font-roboto-flex dark:text-white flex justify-end items-center mx-2 mb-2 gap-2">
        <button onClick = {handleRoleAccessLevel} className="bg-sidebar rounded-sm py-1.5 px-4 text-black">Add Role</button>
             <p className="dark:bg-darkgray bg-white flex items-center px-4 py-2 gap-1.5 rounded-sm text-xs font-medium">
               Filter
               <BiFilterAlt />
             </p>
           </div>
      <div className="mx-2  h-[530px] dark:bg-darkgray bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {[
                  "S.no",
                  "Name",
                  "Roles",
                  "Phone Number",
                  "Email",
                  "Status",
                  "Created By",
                ].map((heading) => (
                  <th key={heading} className="p-3.5">
                    <h1 className="flex items-center justify-center  gap-1">
                      {heading} <HiArrowsUpDown className="dark:text-white" />
                    </h1>
                  </th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=" dark:bg-darkgray dark:text-white text-gray-600 cursor-default">
              {paginatedData.length > 0 ? (
                paginatedData.map((data, index) => (
                  <tr
                    className="border-b-[1px] dark:border-black border-gray-400 text-center text-sm  "
                    key={index}
                  >
                    <td className="">{data.sno}</td>
                    <td>{data.name}</td>
                    <td>{data.roles}</td>
                    <td>{data.phonenumber}</td>
                    <td>{data.email}</td>
                    <td>{data.status}</td>
                    <td>{data.createdby}</td>
                    <td className="flex items-center justify-center py-2.5">
                      <p className="p-1.5 bg-blue-300 text-blue-500 rounded-sm mx-2">
                        <FiEdit2 />
                      </p>
                      <p className="mx-2 p-1.5  bg-pink-200 text-red-500 rounded-sm">
                        {" "}
                        <RiDeleteBinLine />
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center py-10 text-gray-500">
                    No matching results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Settings;
