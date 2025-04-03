import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import NavBar from "../../components/NavBar";
import { useSearch } from "../../components/SearchBar";
import Filter from "../../components/Filter";
import { trailTransactions, premiumTransactions } from "../../components/Data";
import { IoClose } from "react-icons/io5";

const Subscription = () => {
  const { searchTerm } = useSearch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [addMoneyModal, setAddMoneyModal] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    const subscriptionStatus = localStorage.getItem("subscribed") === "true";
    setIsSubscribed(subscriptionStatus);

    // Load appropriate transactions
    const transactionData = subscriptionStatus
      ? premiumTransactions
      : trailTransactions;
    setFilteredData(transactionData);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;

    const lowerSearchTerm = searchTerm.toString().toLowerCase();
    const filtered = (
      isSubscribed ? premiumTransactions : trailTransactions
    ).filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().startsWith(lowerSearchTerm)
      )
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, isSubscribed]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleAddMoney = () => {
    setAddMoneyModal(true);
  };

  return (
    <>
      <NavBar
        title="Subscription"
        pagetitle={isSubscribed ? "Premium" : "Trail"}
      />
      <div className="font-roboto-flex dark:text-white flex justify-between items-center mx-2 mb-1">
        <div>
          <p className="font-semibold text-lg">
            Current Pack:{" "}
            <span className="text-sidebar">
              {isSubscribed ? "Premium" : "Trail"}
            </span>
          </p>
          <span className="text-gray-300 text-sm">
            Valid Upto: {isSubscribed ? "25.05.2026" : "25.05.2025"}
          </span>
        </div>
        <div className="flex gap-2">
          {!isSubscribed ? (
            <p
              className="cursor-pointer text-sm bg-sidebar px-3 py-2 text-black rounded-sm"
              onClick={() => navigate("subscriptionplans")}
            >
              Subscribe Now
            </p>
          ) : (
            <p
              onClick={handleAddMoney}
              className="cursor-pointer text-sm bg-sidebar px-3 py-2 text-black rounded-sm"
            >
              Add Money
            </p>
          )}
          <p className="cursor-pointer text-sm bg-darkgray px-3 py-2 text-white rounded-sm">
            Wallet Balance: ₹ 5000
          </p>
          <Filter />
        </div>
      </div>

      <div className="mx-2 h-[518px] dark:bg-darkgray bg-white rounded-lg">
        <div className="overflow-auto no-scrollbar">
          <table className="font-roboto-flex w-full dark:text-white text-gray-800 whitespace-nowrap">
            <thead>
              <tr className="font-semibold text-sm border-b-[1px] dark:border-black border-gray-400">
                {["S.no", "Particle", "Credit/Debit", "Amount", "Balance"].map(
                  (heading) => (
                    <th key={heading} className="p-3.5">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="dark:bg-darkgray dark:text-white text-gray-600 cursor-default">
              {paginatedData.length > 0 ? (
                paginatedData.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b-[1px] dark:border-black border-gray-400 text-center text-sm"
                  >
                    <td className="p-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{data.particle}</td>
                    <td
                      className={`first-letter:uppercase ${
                        data.type === "debit"
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {data.type}
                    </td>
                    <td>{data.amount}</td>
                    <td>{data.balance}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-500">
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
      {addMoneyModal && (
        <div className="font-roboto-flex fixed inset-0 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-popup-gray text-white lg:w-[420px] md:w-[420px] w-[360px]">
            <button
              onClick={() => setAddMoneyModal(false)}
              className="grid place-self-end -mx-4 -my-4 dark:bg-popup-gray bg-white dark:text-white text-black py-2 px-2 rounded-full"
            >
              <IoClose className="size-[24px]" />
            </button>
            <div className="grid justify-center px-4 py-6 gap-6">
              <p className="text-center font-semibold text-2xl">Add Money</p>
              <form className="grid grid-cols-12 items-center font-normal text-base gap-2">
                <p className="col-span-12 text-sm">Add Money To Your Wallet</p>
                <label className="col-span-5 font-semibold text-nowrap">
                 Amount
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="col-span-7 border-gray-400 border rounded-md px-6 py-2 placeholder:text-xs"
                />
              </form>
            </div>
            <div className="flex justify-end items-center gap-4 mb-4 mx-6 text-sm font-normal">
              <button
                className="cursor-pointer text-sidebar border border-sidebar px-6 py-1.5 rounded-sm"
                onClick={() => setAddMoneyModal(false)}
              >
                Discard
              </button>
              <button
                onClick={() => setAddMoneyModal(false)}
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

export default Subscription;
