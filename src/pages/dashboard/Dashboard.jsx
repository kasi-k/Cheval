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

const Dashboard = () => {
  const data = [
    { status: "Delayed", delayed: 15},
    { status: "In Progress", inProgress: 15},
    { status: "Delivered", delivered: 15 },
  ];

  return (
    <>
    <NavBar title="Dashboard" pagetitle="Main Dashboard"/>
    <div className="p-4  text-white min-h-screen">
      <div className="grid grid-cols-4 bg-darkgray gap-4 p-6 mb-6 rounded-lg">
        {[
          "Daily Availability",
          "Invoice & Payments",
          "Reports & Analytics",
          "Recent Bookings",
        ].map((action, index) => (
          <div key={index} className="p-3 bg-popup-gray rounded-lg text-center">
            {action}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Shipment Summary */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-darkgray rounded-lg text-center">
              <h3 className="text-xl font-bold">12</h3>
              <p className="text-sm">Active Shipment</p>
            </div>
            <div className="p-4 bg-darkgray rounded-lg text-center">
              <h3 className="text-xl font-bold">12</h3>
              <p className="text-sm">Completed Shipment</p>
            </div>
          </div>

          {/* Shipment Status Graph */}
          <div className="grid bg-darkgray p-4 rounded-lg ">
            <h3 className="text-lg font-semibold mb-2">Shipment Status</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="status" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip
                  cursor={{ fill: "#333" }}
                  contentStyle={{ backgroundColor: "#222", border: "none"}}
                />
                <Legend wrapperStyle={{ color: "#ffffff" }} />
                <Bar
                  dataKey="delayed"
                  fill="#ff4d4f"
                  barSize={40}
                  radius={[5, 5, 5, 5]}
                  name="Delayed"
                />
                <Bar
                  dataKey="inProgress"
                  fill="#ffc107"
                  barSize={40}
                  radius={[5, 5, 5, 5]}
                  name="In Progress"
                />
                <Bar
                  dataKey="delivered"
                  fill="#28a745"
                  barSize={40}
                  radius={[5, 5, 5, 5]}
                  name="Delivered"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* New Enquiries Table */}
        <div className="col-span-2 bg-darkgray p-4 rounded-lg overflow-x-auto">
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold">New Enquiries</h3>
            <span className="text-sm text-gray-400">
              Date: <span className="text-blue-400">24.03.2025</span> Time:{" "}
              <span className="text-blue-400">12:23pm</span>
            </span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-600 text-gray-300 text-sm">
                <th className="py-2 px-2">S.No</th>
                <th className="px-2">Enquiry No</th>
                <th className="px-2">Vehicle Type</th>
                <th className="px-2">To Location</th>
                <th className="px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, index) => (
                <tr key={index} className="border-b border-gray-700 text-sm">
                  <td className="py-2 px-2">{index + 1}</td>
                  <td className="px-2">#7288378</td>
                  <td className="px-2">Truck</td>
                  <td className="px-2">Name</td>
                  <td className="px-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded text-xs">
                      Bid Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
