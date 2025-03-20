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
import ViewDriver from "./pages/driver management/ViewDriver";
import ViewRevenue from "./pages/report & analytics/ViewRevenue";
import ViewSupport from "./pages/help & support/ViewSupport";
import AddRoleAccess from "./pages/settings/AddRoleAcess";
import ViewAvailability from "./pages/daily availability/ViewAvailability";
import ViewInvoice from "./pages/invoice & payments/ViewInvoice";
import Viewbooking from "./pages/booking/Viewbooking";
import ConsignmentNote from "./pages/booking/ConsignmentNote";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/booking_enquiries" element={<BookingEnquiry />} />

            <Route path="/bookings">
              <Route index element={<Booking />} />
              <Route path="view_booking">
                <Route index element={<Viewbooking />} />

                <Route path="view_challan" element={<ConsignmentNote />} />
              </Route>
            </Route>
            <Route path="/daily_availability">
              <Route index element={<DailyAvailability />} />
              <Route
                path="view_dailyavailability"
                element={<ViewAvailability />}
              />
            </Route>
            <Route path="/vehicle_management">
              <Route index element={<VehicleManagement />} />
              <Route path="view_vehicle" element={<ViewVehicle />} />
            </Route>
            <Route path="/driver_management">
              <Route index element={<DriverManagement />} />
              <Route path="view_driver" element={<ViewDriver />} />
            </Route>
            <Route path="/invoice_payments">
              <Route index element={<InvoicePayments />} />
              <Route path="view_invoice" element={<ViewInvoice />} />
            </Route>

            <Route path="/reports_analytics" element={<ReportAnalytics />} />

            <Route path="/help_support">
              <Route index element={<HelpSupport />} />
              <Route path="view_support" element={<ViewSupport />} />
            </Route>
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/settings">
              <Route index element={<Settings />} />
              <Route path="roleaccess" element={<AddRoleAccess />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
