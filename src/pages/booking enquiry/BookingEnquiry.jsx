import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { BiFilterAlt } from "react-icons/bi";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";

const BookingEnquiry = () => {
  const { searchTerm } = useSearch(); // Get search term from context
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(EnquiryData); // Show all data if search is empty
      return;
    }
  
    const lowerSearchTerm = searchTerm.toString().toLowerCase();
  
    const filtered = EnquiryData.filter((item) =>
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

  const EnquiryData = [
    {
      sno: "1",
      enquiryno: "#24637",
      enquirydate: "11 feb 2025",
      bookingcompany: "SwiftLogix",
      status: "accepted",
      from: "name",
      to: "name",
      vehicletype: "Truck",
    },
    {
      sno: "2",
      enquiryno: "#24638",
      enquirydate: "12 feb 2025",
      bookingcompany: "MoveMate",
      status: "rejected",
      from: "name",
      to: "name",
      vehicletype: "Mini Truck",
    },
    {
      sno: "3",
      enquiryno: "#24639",
      enquirydate: "13 feb 2025",
      bookingcompany: "TransFast",
      status: "expired",
      from: "name",
      to: "name",
      vehicletype: "Trailer",
    },
    {
      sno: "4",
      enquiryno: "#24640",
      enquirydate: "14 feb 2025",
      bookingcompany: "FleetFlow",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Container Truck",
    },
    {
      sno: "5",
      enquiryno: "#24641",
      enquirydate: "18 feb 2025",
      bookingcompany: "LoadLink",
      status: "bided",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "6",
      enquiryno: "#24642",
      enquirydate: "15 feb 2025",
      bookingcompany: "QuickHaul",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "7",
      enquiryno: "#24643",
      enquirydate: "16 feb 2025",
      bookingcompany: "ShipEase",
      status: "bided",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },

    {
      sno: "8",
      enquiryno: "#24644",
      enquirydate: "15 feb 2025",
      bookingcompany: "GoCargo",
      status: "accepted",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "9",
      enquiryno: "#24645",
      enquirydate: "15 feb 2025",
      bookingcompany: "TrackNGo",
      status: "rejected",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "10",
      enquiryno: "#24646",
      enquirydate: "25 feb 2025",
      bookingcompany: "RouteMaster",
      status: "expired",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "11",
      enquiryno: "#24647",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Pickup Van",
    },
    {
      sno: "11",
      enquiryno: "#24647",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Pickup Van",
    },
    {
      sno: "11",
      enquiryno: "#24647",
      enquirydate: "15 feb 2025",
      bookingcompany: "LLink",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Pickup Van",
    },
    {
      sno: "11",
      enquiryno: "#24647",
      enquirydate: "15 feb 2025",
      bookingcompany: "adLink",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Pickup Van",
    },
    {
      sno: "11",
      enquiryno: "#24647",
      enquirydate: "15 feb 2025",
      bookingcompany: "Link",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Pickup Van",
    },
    {
      sno: "11",
      enquiryno: "#24647",
      enquirydate: "15 feb 2025",
      bookingcompany: "Load",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Pickup Van",
    },
  ];

  return (
    <>
      <NavBar title="Booking Enquiries" pagetitle="Booking list" />
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
                  "Enquiry Date",
                  "Booking Company",
                  "Status",
                  "From",
                  "To",
                  "Vehicle Type",
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
                    <td>{data.enquirydate}</td>
                    <td>{data.bookingcompany}</td>
                    <td
                      className={`
                                  
                           ${
                             {
                               accepted: "text-green-600",
                               rejected: "text-red-600",
                               expired: "text-yellow-600 ",
                               new: "text-sky-500 ",
                               bided: "text-blue-800 ",
                             }[data.status]
                           }`}
                    >
                      {data.status.charAt(0).toUpperCase() +
                        data.status.slice(1).toLowerCase()}
                    </td>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td className="">{data.vehicletype}</td>
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

export default BookingEnquiry;
