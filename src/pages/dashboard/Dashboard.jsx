import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import NavBar from "../../components/NavBar";
import { FolderOpenDot } from "lucide-react"; //active shipment
import { PackageCheck } from "lucide-react"; //Completed Shipment
import Filter from "../../components/Filter";
import { TbTableShare } from "react-icons/tb"; //Table Availabity
import { FaFileInvoiceDollar } from "react-icons/fa6"; // Invoice & Payment
import { GoReport } from "react-icons/go";
import { BookOpen } from "lucide-react";
import RecentBookings from "./RecentBookings";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const bookingData = {
    delayed: 10,      // Number of delayed shipments
    inProgress: 15,    // Number of in-progress shipments
    delivered: 8      // Number of delivered shipments
  };
  
  // Convert booking data into chart format
  const data = [
    {
      status: "Shipments",
      delayed: bookingData.delayed,
      inProgress: bookingData.inProgress,
      delivered: bookingData.delivered
    }
  ];
  const actions = [
    { label: "Daily Availability", icon: <TbTableShare size={20}/>,path:"/daily_availability" },
    { label: "Invoice & Payments", icon: <FaFileInvoiceDollar size={20} />, path:"/invoice_payments" },
    { label: "Reports & Analytics", icon: <GoReport size={20} />,path:"/reports_analytics" },
    { label: "Recent Bookings", icon: <BookOpen size={20} />,path:"/booking_enquiries" },
  ];
  const CustomLegend = (props) => {
    const { payload } = props; // Get legend items from Recharts
    return (
      <div className="grid justify-center gap-2">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center text-white">
            <div
              className="w-4 h-4 rounded mr-2"
              style={{ backgroundColor: entry.color }} // Legend color from chart
            ></div>
            <span className=" text-sm font-semibold">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <NavBar title="Dashboard" pagetitle="Main Dashboard" />
      <div className="text-white ">
        <div className="grid grid-cols-4 p-4 gap-2 bg-darkgray rounded-lg my-4">
          <div className="col-span-4 flex justify-between items-center px-2">
            {" "}
            <p>Quick Actions</p>{" "}
            <span>
              <Filter />
            </span>
          </div>
          {actions.map((action, index) => (
            <div
              key={index}
              className=" cursor-pointer flex items-center gap-3 py-2 px-4 bg-popup-gray rounded-sm text-center"
              onClick={() => navigate(action.path)}
            >
              {action.icon}
              <span>{action.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Shipment Summary */}
          <div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div onClick={()=>navigate("/bookings")} className=" cursor-pointer  bg-darkgray px-4 py-4  rounded-lg">
                <span className="flex items-center gap-16">
                  <FolderOpenDot className="stroke-2 size-14 text-sidebar  bg-popup-gray px-3 py-2 rounded-lg" />
                  <p className="text-3xl font-bold">12</p>
                </span>
                <p className="pt-5 text-sm font-medium">Active Shipment</p>
              </div>
              <div
                onClick={() => navigate("/bookings")}
                className=" cursor-pointer  bg-darkgray px-4 py-4  rounded-lg"
              >
                {" "}
                <span className="flex items-center gap-16">
                  <PackageCheck className="size-14 text-sidebar  bg-popup-gray px-3 py-2 rounded-lg" />
                  <p className="text-3xl font-bold">45</p>
                </span>
                <p className="pt-5 text-sm font-medium">Completed Shipment</p>
              </div>
            </div>
            <div className="grid bg-darkgray p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Shipment Status</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          barCategoryGap={50}
          barGap={20}
        >
          <XAxis dataKey="status" stroke="#ffffff" />
          <YAxis stroke="#ffffff" /> 
          <Tooltip contentStyle={{ backgroundColor: "#222", border: "none" }} />
          <Legend content={<CustomLegend />} />

          {/* Now all three bars appear in the same row */}
          <Bar dataKey="delayed" fill="#ff4d4f" barSize={40} radius={[5, 5, 5, 5]} name="Delayed" />
          <Bar dataKey="inProgress" fill="#ffc107" barSize={40} radius={[5, 5, 5, 5]} name="In Progress" />
          <Bar dataKey="delivered" fill="#28a745" barSize={40} radius={[5, 5, 5, 5]} name="Delivered" />
        </BarChart>
      </ResponsiveContainer>
    </div>
          </div>

          {/* New Enquiries Table */}
          <div className="col-span-2 bg-darkgray rounded-lg ">
            <div className="flex justify-between items-center px-2.5 py-2 ">
              <h3 className="text-lg font-semibold">New Enquiries</h3>
              <span className="text-sm text-white ">
                Date: <span className="text-sidebar">24.03.2025</span> Time:{" "}
                <span className="text-sidebar">12:23pm</span>
              </span>
            </div>
            <RecentBookings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
