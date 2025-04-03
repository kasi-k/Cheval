import React, { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import DeleteModal from "../../components/DeleteModal";

const Roles = () => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleAddRole = () => {
    navigate("roleaccess");
  };

  return (
    <>
      <NavBar title="Settings" pagetitle="Roles" />
      <div className="font-roboto-flex dark:text-white flex justify-end items-center mx-2 mb-2 gap-2 w-1/2">
        <p
          onClick={handleAddRole}
          className=" cursor-pointer bg-sidebar rounded-sm py-1.5 px-4 text-black"
        >
          {" "}
          + Add Role
        </p>
      </div>
      <div className="mx-2 w-1/2 h-fit dark:bg-darkgray bg-white rounded-lg py-2">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {["S.no", "RoleName"].map((heading) => (
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
              <tr className="border-b-[1px] dark:border-black border-gray-400 text-center text-sm  ">
                <td className="">1</td>
                <td>Super Admin</td>
                <td className="flex items-center justify-center py-2.5">
                  <p
                    onClick={() => navigate("roleaccess")}
                    className=" cursor-pointer p-1.5 bg-blue-300 text-blue-500 rounded-sm mx-2"
                  >
                    <FiEdit2 />
                  </p>
                  <p
                    onClick={() => setIsDeleteModal(true)}
                    className=" cursor-pointer mx-2 p-1.5  bg-pink-200 text-red-500 rounded-sm"
                  >
                    {" "}
                    <RiDeleteBinLine />
                  </p>
                </td>
              </tr>
              <tr className="border-b-[1px] dark:border-black border-gray-400 text-center text-sm  ">
                <td className="">2</td>
                <td>Admin</td>
                <td className="flex items-center justify-center py-2.5">
                  <p
                    onClick={() => navigate("roleaccess")}
                    className=" cursor-pointer p-1.5 bg-blue-300 text-blue-500 rounded-sm mx-2"
                  >
                    <FiEdit2 />
                  </p>
                  <p
                    onClick={() => setIsDeleteModal(true)}
                    className="mx-2 p-1.5 cursor-pointer  bg-pink-200 text-red-500 rounded-sm"
                  >
                    {" "}
                    <RiDeleteBinLine />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isDeleteModal && (
        <DeleteModal title="Role" onclose={() => setIsDeleteModal(false)} />
      )}
    </>
  );
};

export default Roles;
