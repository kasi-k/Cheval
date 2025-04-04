import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";
import { RoleData } from "../../components/Data";
import { Navigate, useNavigate } from "react-router-dom";
import Filter from "../../components/Filter";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteModal from "../../components/DeleteModal";

const Settings = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
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
  const handleRoles = () => {
    navigate("roles");
  };
  const handleAddUser = () => {
    setAddUserModal(true);
  };
  const handleEditUser = () => {
    setEditUserModal(true);
  };
  const handleDeleteUser = () => {
    setDeleteModal(true);
  };


  return (
    <>
      <NavBar title="Settings" pagetitle="user" />
      <div className="font-roboto-flex dark:text-white flex justify-end items-center mx-2 mb-2 gap-2">
        <p
          onClick={handleAddUser}
          className=" cursor-pointer bg-sidebar rounded-sm py-1.5 px-4 text-black"
        >
          {" "}
          + Add User
        </p>
        <button
          onClick={handleRoles}
          className=" cursor-pointer bg-sidebar rounded-sm py-1.5 px-4 text-black"
        >
          Roles
        </button>
        <Filter />
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
                      <p onClick={handleEditUser} className=" cursor-pointer p-1.5 bg-blue-300 text-blue-500 rounded-sm mx-2">
                        <FiEdit2 />
                      </p>
                      <p onClick={handleDeleteUser} className=" cursor-pointer mx-2 p-1.5  bg-pink-200 text-red-500 rounded-sm">
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
      {addUserModal && <AddUser onclose={() => setAddUserModal(false)} />}
        {editUserModal && <EditUser onclose={()=>setEditUserModal(false)}/>}
          {deleteModal && <DeleteModal onclose={()=>setDeleteModal(false)} title="user"/>}
    </>
  );
};

export default Settings;
