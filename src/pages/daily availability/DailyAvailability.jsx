import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";
import { DailyData } from "../../components/Data";
import AddAvailability from "./AddAvailability";
import EditAvailability from "./EditAvailability";
import DeleteModal from "../../components/DeleteModal";
import { Navigate, useNavigate } from "react-router-dom";

const DailyAvailability = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [addDailyAvailability, setAddDailyAvailability] = useState(false)
  const [editDailyAvailability, setEditDailyAvailability] = useState(false)
  const [deleteAvailability, setDeleteAvailability] = useState(false)
  const navigate = useNavigate()

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(DailyData); // Show all data if search is empty
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();

    const filtered = DailyData.filter((item) =>
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

  const handleAddAvailability = () => {
    setAddDailyAvailability(true)
  }
  const handleEditAvailability = () => {
    setEditDailyAvailability(true)
  }
  const handleViewAvailability = () =>{
    navigate("view_dailyavailability")
  }
  const handleDeleteAvailability = () => {
    setDeleteAvailability(true)
  }

  return (
    <>
      <NavBar title="Daily Availability" pagetitle="Daily Table" />
      <div className="font-roboto-flex dark:text-white flex justify-end items-center mx-2 mb-2">
        <p onClick={handleAddAvailability} className=" cursor-pointer dark:bg-sidebar bg-white flex items-center px-4 py-2 gap-1.5 rounded-sm text-sm font-semibold w-48 justify-center text-black">
          + Add
        </p>
      </div>
      <div className="mx-2  h-[530px] dark:bg-darkgray bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {[
                  "S.no",
                  "Vehicle No",
                  "Vehicle Type",
                  "Current Location Pincode",
                  "Preferred State",
                  "Preferred District",
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
                    <td className="">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{data.vehicleno}</td>
                    <td>{data.vehicletype}</td>
                    <td>{data.currentlocationpincode}</td>
                    <td>{data.preferredstate}</td>
                    <td>{data.preferreddistrict}</td>
                    <td className="flex items-center justify-center py-2.5">
                      <p onClick={handleEditAvailability} className="cursor-pointer p-1.5 bg-blue-300 text-blue-500 rounded-sm mx-2">
                        <FiEdit2 />
                      </p>
                      <p onClick = {handleViewAvailability} className=" cursor-pointer p-1.5  bg-green-200 text-green-600 rounded-sm">
                        <MdOutlineRemoveRedEye />
                      </p>
                      <p onClick={handleDeleteAvailability} className="cursor-pointer mx-2 p-1.5  bg-pink-200 text-red-500 rounded-sm">
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
      {addDailyAvailability && <AddAvailability onclose={() => setAddDailyAvailability(false)}/>}
      {editDailyAvailability && <EditAvailability onclose={() => setEditDailyAvailability(false)}/>}
        {deleteAvailability && <DeleteModal onclose={() => setDeleteAvailability(false)} title="Daily Availability"/>}
    </>
  );
};

export default DailyAvailability;
