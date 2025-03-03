import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { BiFilterAlt } from "react-icons/bi";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";

const Booking = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(BookingData); // Show all data if search is empty
      return;
    }
  
    const lowerSearchTerm = searchTerm.toString().toLowerCase();
  
    const filtered = BookingData.filter((item) =>
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

  const BookingData = [
    {
        sno: "1",
        enquiryno: "#24647",
        bookingcompany: "SwiftLogix",
        shippingdate: "11 feb 2025",
        from: "name",
        to: "name",
        status: "confirmed",
        driver: "name",
      },
      {
        sno: "2",
        enquiryno: "#24648",
        bookingcompany: "MoveMate",
        shippingdate: "12 feb 2025",
        from: "name",
        to: "name",
        status: "in transmit",
        driver: "name",
      },
      {
        sno: "3",
        enquiryno: "#24649",
        bookingcompany: "TransFast",
        shippingdate: "13 feb 2025",
        from: "name",
        to: "name",
        status: "completed",
        driver: "name",
      },
      {
        sno: "4",
        enquiryno: "#24650",
        bookingcompany: "FleetFlow",
        shippingdate: "14 feb 2025",
        from: "name",
        to: "name",
        status: "confirmed",
        driver: "name",
      },
      {
        sno: "5",
        enquiryno: "#24651",
        bookingcompany: "QuickHaul",
        shippingdate: "15 feb 2025",
        from: "name",
        to: "name",
        status: "confirmed",
        driver: "name",
      },
  ];

  return (
    <>
      <NavBar title="Booking" pagetitle="Booking Table" />
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
                  "Enquiry No",
                  "Booking Company",
                  "Shipping Date",
                  "From",
                  "To",
                  "Status",
                  "Driver",
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
                    <td>{data.enquiryno}</td>
                    <td>{data.bookingcompany}</td>
                    <td>{data.shippingdate}</td>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td
                      className={`
                                  
                           ${
                             {
                               completed: "text-green-600",
                               confirmed: "text-yellow-600 ",
                               "in transmit": "text-sky-500 ",
                             }[data.status]
                           }`}
                    >
                      {data.status.charAt(0).toUpperCase() +
                        data.status.slice(1).toLowerCase()}
                    </td>
                    <td className="">{data.driver}</td>
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

export default Booking;
