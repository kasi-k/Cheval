import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";
import { EnquiryData } from "../../components/Data";
import { BiSolidError } from "react-icons/bi";
import Filter from "../../components/Filter";
import { IoMdTime } from "react-icons/io";

const BookingEnquiry = () => {
  const { searchTerm } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [biddedRows, setBiddedRows] = useState({}); // Track bid status per row
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState(false);
  const [selectedBid, setSelectedBid] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(EnquiryData);
      return;
    }

    const lowerSearchTerm = searchTerm.toString().toLowerCase();
    const filtered = EnquiryData.filter((item) =>
      Object.values(item).some((value) => {
        const lowerValue = value.toString().toLowerCase();
        if (lowerValue === lowerSearchTerm) return true;
        if (!isNaN(searchTerm) && lowerValue.includes(searchTerm)) return true;
        return lowerValue.startsWith(lowerSearchTerm);
      })
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const handleBidClick = (index) => {
    setSelectedBid(index);
    setIsBidModalOpen(true);
  };

  const handleSubmitBid = () => {
    if (!bidAmount.trim()) {
      setError(true);
      return;
    }

    setBiddedRows((prev) => ({ ...prev, [selectedBid]: true }));
    setIsBidModalOpen(false);
    setError(false);
    setBidAmount("");
  };

  const sortedData = [...filteredData].sort((a, b) => {
    return (biddedRows[a.sno] ? 1 : 0) - (biddedRows[b.sno] ? 1 : 0);
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <NavBar title="Booking Enquiries" pagetitle="Booking list" />
      <div className="font-roboto-flex dark:text-white flex justify-between items-center mx-2 mb-2">
        <div className="flex gap-4">
          <p className="text-lg font-normal">
            Date:
            <span className="text-sidebar font-semibold text-lg mx-2">
              20.03.2025
            </span>
          </p>
          <p className="text-lg font-normal">
            Batch Time:
            <span className="text-sidebar font-semibold text-lg mx-2">
              9:30 am
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <IoMdTime className="size-6" /> <Filter />
        </div>
      </div>
      <div className="mx-2 h-[540px] dark:bg-darkgray bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className="font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {[
                  "S.no",
                  "Enquiry No",
                  "Enquiry Date",
                  "Goods Type",
                  "Weight",
                  "From",
                  "To",
                  "Vehicle Type",
                ].map((heading) => (
                  <th key={heading} className="p-3">
                    <h1 className="flex items-center justify-center gap-1">
                      {heading} <HiArrowsUpDown className="dark:text-white" />
                    </h1>
                  </th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="dark:bg-darkgray dark:text-white text-gray-600 cursor-default">
              {paginatedData.length > 0 ? (
                paginatedData.map((data,index) => (
                  <tr
                    className={`border-b-[1px] dark:border-black border-gray-400 text-center text-sm
                    ${biddedRows[data.sno] ? " dark:bg-popup-gray border-t-4" : ""}`}
                    key={index}
                  >
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{data.enquiryno}</td>
                    <td>{data.enquirydate}</td>
                    <td>{data.goodstype}</td>
                    <td>{data.weight}</td>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td>{data.vehicletype}</td>
                    <td className="flex items-center justify-center py-2 text-sm">
                      {!biddedRows[data.sno] ? (
                        <p
                          onClick={() => handleBidClick(data.sno)}
                          className="cursor-pointer px-2 py-1.5 bg-green-100 text-sky-500 rounded-sm"
                        >
                          Bid Now
                        </p>
                      ) : (
                        <p className="cursor-pointer px-2 py-1 bg-green-300 text-green-800 rounded-sm">
                          Quoted
                        </p>
                      )}
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
      {isBidModalOpen && (
        <div className="font-roboto-flex fixed inset-0 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-popup-gray text-white lg:w-[420px] md:w-[420px] w-[360px]">
            <button
              onClick={() => setIsBidModalOpen(false)}
              className="grid place-self-end -mx-4 -my-4 dark:bg-popup-gray bg-white dark:text-white text-black py-2 px-2 rounded-full"
            >
              <IoClose className="size-[24px]" />
            </button>
            <div className="grid justify-center px-6 py-6 gap-6">
              <p className="text-center font-semibold text-2xl">Bid Now</p>
              <form className="grid grid-cols-12 items-center font-normal text-base gap-4">
                <label className="col-span-5 font-semibold text-nowrap">
                  Bidding Amount
                </label>
                <input
                  type="text"
                  placeholder="Enter Bidding Amount"
                  className="col-span-7 border-gray-400 border rounded-md px-6 py-2 placeholder:text-xs"
                  value={bidAmount}
                  onChange={(e) => {
                    setBidAmount(e.target.value);
                    if (e.target.value.trim()) {
                      setError(false);
                    }
                  }}
                />
                {error && (
                  <p className="col-span-12 text-red-500 text-base font-normal my-2.5">
                    <span className="flex items-center gap-2 text-sm">
                      <BiSolidError /> ( Vehicle Details will be visible once
                      bid is confirmed )
                    </span>
                  </p>
                )}
              </form>
            </div>
            <div className="flex justify-end items-center gap-4 mb-4 mx-6 text-sm font-normal">
              <button
                className="cursor-pointer text-sidebar border border-sidebar px-6 py-1.5 rounded-sm"
                onClick={() => setIsBidModalOpen(false)}
              >
                Discard
              </button>
              <button
                onClick={handleSubmitBid}
                className="cursor-pointer bg-sidebar text-black px-6 py-1.5 rounded-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingEnquiry;
