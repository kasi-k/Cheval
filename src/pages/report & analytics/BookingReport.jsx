import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { useSearch } from "../../components/SearchBar";

const BookingReport = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(BookingReportData); // Show all data if search is empty
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();

    const filtered = BookingReportData.filter((item) =>
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

  const BookingReportData = [
    {
      sno: "1",
      date: "11 feb 2025",
      bidaccepted: "5678",
      bidamount: "567",
      paymentcollected: "7894",
      paymentbalance: "7684",
    },
    {
      sno: "2",
      date: "14 feb 2025",
      bidaccepted: "5487",
      bidamount: "548",
      paymentcollected: "5872",
      paymentbalance: "5678",
    }
  ];

  return (
    <>
      <div className="mx-2  h-[514px] dark:bg-[#1D1D1D] bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className=" font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {[
                  "S.no",
                  "Date",
                  "Bid Accepted",
                  "Bid Amount",
                  "Payment Collected",
                  "Payment Balance"
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
                    <td>{data.date}</td>
                    <td>{data.bidaccepted}</td>
                    <td>{data.bidamount}</td>
                    <td>{data.paymentcollected}</td>
                    <td>{data.paymentbalance}</td>
                    <td className="flex items-center justify-center py-2.5">
                      <p className=" cursor-pointer p-1.5  bg-green-200 text-green-600 rounded-sm">
                        <MdOutlineRemoveRedEye />
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

export default BookingReport;
