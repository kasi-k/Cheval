import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "../../components/Pagination";

const BookingEnquiry = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = EnquiryData.slice(startIndex, startIndex + itemsPerPage);
    setData(selectedData);
  }, [currentPage]);

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
      bookingcompany: "Logix",
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
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "bided",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "6",
      enquiryno: "#24641",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "7",
      enquiryno: "#24641",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "bided",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },

    {
      sno: "8",
      enquiryno: "#24641",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "accepted",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "9",
      enquiryno: "#24641",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "rejected",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "10",
      enquiryno: "#24641",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "expired",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    {
      sno: "11",
      enquiryno: "#24641",
      enquirydate: "15 feb 2025",
      bookingcompany: "LoadLink",
      status: "new",
      from: "name",
      to: "name",
      vehicletype: "Tanker",
    },
    
  ];
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="">
        <table className="font-roboto-flex w-full bg-[#1D1D1D] rounded-lg  text-white">
          <thead>
            <tr className=" font-semibold text-sm border-b-2 border-black">
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
                    {heading} <HiArrowsUpDown className="text-white" />
                  </h1>
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" bg-[#1D1D1D] cursor-default">
            {data &&
              data.map((data, index) => (
                <tr
                  className="border-b-2 border-black text-center text-sm "
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
                  <td className="flex items-center justify-center py-3">
                    <p className=" cursor-pointer p-1.5  bg-green-200 text-green-600 rounded-sm">
                      <MdOutlineRemoveRedEye />
                    </p>
                    <p className="ml-4 p-1.5  bg-pink-200 text-red-500 rounded-sm">
                      {" "}
                      <RiDeleteBinLine />
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
        totalItems={EnquiryData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      </div>
    </>
  );
};

export default BookingEnquiry;
