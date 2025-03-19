import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import RevenueReport from "./RevenueReport";
import BookingReport from "./BookingReport";
import Filter from "../../components/Filter";

const ReportAnalytics = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <NavBar
        title="Report & Analytics"
        pagetitle={activeTab === "1" ? "Revenue Report" : "Booking Report"}
      />
      <div className="cursor-pointer flex justify-between items-center mx-2">
        <div className="font-roboto-flex flex gap-2  py-2 dark:text-white">
          <p
            className={`px-3 py-3 font-semibold rounded-sm text-sm ${
              activeTab === "1" ? "bg-sidebar dark:text-black" : ""
            }`}
            onClick={() => setActiveTab("1")}
          >
            Revenue Report
          </p>
          <p
            className={`px-3 py-3 font-semibold rounded-sm text-sm ${
              activeTab === "2" ? "bg-sidebar dark:text-black" : ""
            }`}
            onClick={() => setActiveTab("2")}
          >
            Booking Report
          </p>
        </div>
        <div className="font-roboto-flex dark:text-white flex justify-end items-center  mb-2">
         <Filter/>
        </div>
      </div>
      {activeTab === "1" ? <RevenueReport /> : <BookingReport />}
    </>
  );
};

export default ReportAnalytics;
