import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import BookingEnquiry from "./pages/booking enquiry/BookingEnquiry";
import Booking from "./pages/booking/Booking";
import DailyAvailability from "./pages/daily availability/DailyAvailability";
import VehicleManagement from "./pages/vehicle management/VehicleManagement";
import DriverManagement from "./pages/driver management/DriverManagement";
import InvoicePayments from "./pages/invoice & payments/InvoicePayments";
import ReportAnalytics from "./pages/report & analytics/ReportAnalytics";
import HelpSupport from "./pages/help & support/HelpSupport";
import Subscription from "./pages/subscription/Subscription";
import Settings from "./pages/settings/Settings";
import AcceptedEnquiry from "./pages/booking enquiry/AcceptedEnquiry";
import NewEnquiry from "./pages/booking enquiry/NewEnquiry";
import RejectedOrExpired from "./pages/booking enquiry/RejectedOrExpired";
import ViewVehicle from "./pages/vehicle management/ViewVehicle";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/booking_enquiries" >
            <Route  index element={<BookingEnquiry/>}/>
            <Route path="view_accepted" element = {<AcceptedEnquiry/>}/>
            <Route path="view_new" element = {<NewEnquiry/>}/>
            <Route path="view_expired-rejected" element = {<RejectedOrExpired/>}/>
            </Route>
            <Route path="/bookings" element={<Booking/>} />
            <Route path="/daily_availability" element={<DailyAvailability/>} />
            <Route path="/vehicle_management" >
            <Route index  element={<VehicleManagement/>}/>
            <Route path="view_vehicle" element = {<ViewVehicle/>}/>
            </Route>
            <Route path="/driver_management" element={<DriverManagement/>} />
            <Route path="/invoice_payments" element={<InvoicePayments/>} />
            <Route path="/reports_analytics" element={<ReportAnalytics/>} />
            <Route path="/help_support" element={<HelpSupport/>} />
            <Route path="/subscription" element={<Subscription/>} />
            <Route path="/settings" element={<Settings/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
