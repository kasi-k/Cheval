import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import BookingEnquiry from "./pages/booking enquiry/BookingEnquiry";
import Booking from "./pages/booking/Booking";
import DailyAvailability from "./pages/daily availability/DailyAvailability";
import VehicleManagement from "./pages/vehicle management/VehicleManagement";
import DriverManagement from "./pages/driver management/DriverManagement";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/booking_enquiries" element={<BookingEnquiry/>} />
            <Route path="/bookings" element={<Booking/>} />
            <Route path="/daily_availability" element={<DailyAvailability/>} />
            <Route path="/vehicle_management" element={<VehicleManagement/>} />
            <Route path="/driver_management" element={<DriverManagement/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
