import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import Pagination from "../../components/Pagination";
import { useSearch } from "../../components/SearchBar";
import { RejectionReports } from "../../components/Data";

const RejectionReport = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(RejectionReports); // Show all data if search is empty
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();

    const filtered = RejectionReports.filter((item) =>
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

  return (
    <>
      <div>
        <div className="mx-2  h-[514px] dark:bg-darkgray bg-white rounded-lg">
          <div className="overflow-auto no-scrollbar">
            <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
              <thead>
                <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                  {[
                    "S.no",
                    "Date",
                    "Total Enquiries",
                    "Quoted",
                    "Rejected",
                    "Rejected Percentage",
                  ].map((heading) => (
                    <th key={heading} className="p-3.5">
                      <h1 className="flex items-center justify-center  gap-1">
                        {heading} <HiArrowsUpDown className="dark:text-white" />
                      </h1>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=" dark:bg-darkgray dark:text-white text-gray-600 cursor-default">
                {paginatedData.length > 0 ? (
                  paginatedData.map((data, index) => (
                    <tr
                      className="border-b-[1px] dark:border-black border-gray-400 text-center text-sm  "
                      key={index}
                    >
                      <td className="p-3">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td>{data.date}</td>
                      <td>{data.totalEnquiries}</td>
                      <td>{data.quoted}</td>
                      <td>{data.rejected}</td>
                      <td>{data.rejectedPercentage}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center py-10 text-gray-500"
                    >
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
      </div>
    </>
  );
};

export default RejectionReport;
