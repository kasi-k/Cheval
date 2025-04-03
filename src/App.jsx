import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import BookingEnquiry from "./pages/booking enquiry/BookingEnquiry";
import Booking from "./pages/booking/Booking";
import Viewbooking from "./pages/booking/Viewbooking";
import ConsignmentNote from "./pages/booking/ConsignmentNote";
import DailyAvailability from "./pages/daily availability/DailyAvailability";
import ViewAvailability from "./pages/daily availability/ViewAvailability";
import VehicleManagement from "./pages/vehicle management/VehicleManagement";
import ViewVehicle from "./pages/vehicle management/ViewVehicle";
import DriverManagement from "./pages/driver management/DriverManagement";
import ViewDriver from "./pages/driver management/ViewDriver";
import InvoicePayments from "./pages/invoice & payments/InvoicePayments";
import ViewInvoice from "./pages/invoice & payments/ViewInvoice";
import ReportAnalytics from "./pages/report & analytics/ReportAnalytics";
import Subscription from "./pages/subscription/Subscription";
import Settings from "./pages/settings/Settings";
import AddRoleAccess from "./pages/settings/AddRoleAcess";
import Login from "./pages/login/Login";
import SubscriptionPlans from "./pages/subscription/SubscriptionPlans";
import Roles from "./pages/settings/Roles";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import PasswordChange from "./pages/login/PasswordChange";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/password_changed" element={<PasswordChange/>} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/booking_enquiries" element={<BookingEnquiry />} />

            <Route path="/bookings">
              <Route index element={<Booking />} />
              <Route path="view_booking">
                <Route index element={<Viewbooking />} />

                <Route path="consignmentnote" element={<ConsignmentNote />} />
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

            <Route path="/subscription">
              <Route index element={<Subscription />} />
              <Route path="subscriptionplans" element={<SubscriptionPlans />} />
            </Route>
            <Route path="/settings">
              <Route index element={<Settings />} />
              <Route path="roles">
                <Route index element={<Roles />} />
                <Route path="roleaccess" element={<AddRoleAccess />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
