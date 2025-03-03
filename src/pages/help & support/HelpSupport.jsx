import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { BiFilterAlt } from "react-icons/bi";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";

const HelpSupport = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(TicketData); // Show all data if search is empty
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();

    const filtered = TicketData.filter((item) =>
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

  const TicketData = [
    {
      sno: "1",
      ticketid: "#24647",
      datacreated: "11 feb 2025",
      category: "Delivery",
      priority: "high",
      status: "closed",
      assignedto: "Tanker",
      lastupdated: "14 feb 2025",
    },
    {
      sno: "2",
      ticketid: "#24648",
      datacreated: "11 feb 2025",
      category: "Delivery",
      priority: "low",
      status: "resolved",
      assignedto: "Mini Truck",
      lastupdated: "15 feb 2025",
    },

    {
      sno: "3",
      ticketid: "#24648",
      datacreated: "15 feb 2025",
      category: "Delivery",
      priority: "medium",
      status: "in progress",
      assignedto: "Truck",
      lastupdated: "18 feb 2025",
    },
  ];

  return (
    <>
      <NavBar title="Help & Support" pagetitle="Table" />
      <div className="font-roboto-flex dark:text-white flex justify-end items-center mx-2 mb-2">
        <p className="dark:bg-[#1D1D1D] bg-white flex items-center px-4 py-2 gap-1.5 rounded-sm text-xs font-medium">
          Filter
          <BiFilterAlt />
        </p>
      </div>
      <div className="mx-2  h-[532px] dark:bg-[#1D1D1D] bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {[
                  "S.no",
                  "Ticket ID",
                  "Date Created",
                  "Category",
                  "Priority",
                  "Status",
                  "Assigned to",
                  "Last Updated",
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
            <tbody className=" dark:bg-[#1D1D1D] dark:text-white text-gray-600 cursor-default">
              {paginatedData.length > 0 ? (
                paginatedData.map((data, index) => (
                  <tr
                    className="border-b-[1px] dark:border-black border-gray-400 text-center text-sm  "
                    key={index}
                  >
                    <td className="">{data.sno}</td>
                    <td>{data.ticketid}</td>
                    <td>{data.datacreated}</td>
                    <td>{data.category}</td>
                    <td>
                      <div
                        className={`rounded-sm mx-5 py-1.5
                                  
                                  ${
                                    {
                                      high: "text-red-500 bg-red-200 ",
                                      medium: "text-yellow-600 bg-yellow-100  ",
                                      low: "text-green-600 bg-green-100",
                                    }[data.priority]
                                  }`}
                      >
                        {data.priority.charAt(0).toUpperCase() +
                          data.priority.slice(1).toLowerCase()}
                      </div>
                    </td>
                    <td
                      className={`
                                  
                           ${
                             {
                               closed: "text-green-600",
                               "in progress": "text-yellow-600 ",
                               resolved: "text-sky-500 ",
                             }[data.status]
                           }`}
                    >
                      {data.status.charAt(0).toUpperCase() +
                        data.status.slice(1).toLowerCase()}
                    </td>
                    <td>{data.assignedto}</td>
                    <td className="">{data.lastupdated}</td>
                    <td className="flex items-center justify-center py-2.5">
                      <p className=" cursor-pointer p-1.5  bg-green-200 text-green-600 rounded-sm">
                        <MdOutlineRemoveRedEye />
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

export default HelpSupport;
