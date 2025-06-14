import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";
import { VehicleData } from "../../components/Data";
import AddVehicle from "./AddVehicle";
import EditVehicle from "./EditVehicle";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate } from "react-router-dom";
import Filter from "../../components/Filter";

const VehicleManagement = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [addVehcile, setAddVehicle] = useState(false);
  const [editVehcile, setEditVehicle] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const navigate = useNavigate();

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(VehicleData); // Show all data if search is empty
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();

    const filtered = VehicleData.filter((item) =>
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
  const handleAddVehicle = () => {
    setAddVehicle(true);
  };
  const handleEditVehicle = () => {
    setEditVehicle(true);
  };

  const handleViewVehicle = () => {
    navigate ("view_vehicle")
  };

  const handleDelete = () => {
    setDeleteModal(true);
  };

  return (
    <>
      <NavBar title="Vehicle Management" pagetitle="Vehicle Table" />
      <div className="font-roboto-flex dark:text-white flex justify-end items-center mx-2 mb-2 gap-2">
        <p
          onClick={handleAddVehicle}
          className=" cursor-pointer dark:bg-sidebar bg-white flex items-center px-4 py-2 gap-1.5 rounded-sm text-sm font-semibold  w-48 justify-center text-black"
        >
          + Add Vehicle
        </p>
       <Filter/>
      </div>
      <div className="mx-2  h-[530px] dark:bg-darkgray bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {[
                  "S.no",
                  "Vehicle Type",
                  "Vehicle Model",
                  "Vehicle Owner ",
                  "Owner Phone",
                  "Vehicle No",
                  "Insurance",
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
                    <td>{data.vehicletype}</td>
                    <td>{data.vehiclemodel}</td>
                    <td>{data.vehicleowner}</td>
                    <td>{data.ownerphone}</td>
                    <td>{data.vehicleno}</td>
                    <td>{data.insurance}</td>
                    <td className="flex items-center justify-center py-2.5">
                      <p
                        onClick={handleEditVehicle}
                        className=" cursor-pointer p-1.5 bg-blue-300 text-blue-500 rounded-sm mx-2"
                      >
                        <FiEdit2 />
                      </p>
                      <p onClick={handleViewVehicle} className=" cursor-pointer p-1.5  bg-green-200 text-green-600 rounded-sm">
                        <MdOutlineRemoveRedEye />
                      </p>
                      <p
                        onClick={handleDelete}
                        className=" cursor-pointer mx-2 p-1.5  bg-pink-200 text-red-500 rounded-sm"
                      >
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
      {addVehcile && <AddVehicle onclose={() => setAddVehicle(false)} />}
      {editVehcile && <EditVehicle onclose={() => setEditVehicle(false)} />}
      {deleteModal && (
        <DeleteModal onclose={() => setDeleteModal(false)} title="Vehicle" />
      )}
    </>
  );
};

export default VehicleManagement;
