import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import StarProgress from "../../components/StarProgress";

const Viewbooking = () => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewParagraph = () => {
    setViewMore(!viewMore);
  };
  return (
    <>
      <NavBar title="Booking" pagetitle="View Booking" />
      <div className="font-roboto-flex mx-2 grid  grid-cols-12  gap-4 dark:text-white my-6 w-full">
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">Enquiry Details</p>
          <div className="grid  lg:grid-cols-5 md:grid-cols-4 grid-cols-4 gap-2 font-light text-xs">
            <p className="col-span-3">Enquiry Date</p>
            <p className="col-span-1">11.02.2025</p>
            <p className="col-span-3">Enquiry No</p>
            <p className="col-span-1">#23456</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">Booking Company Details</p>
          <div className="grid  lg:grid-cols-5 md:grid-cols-4 grid-cols-4 gap-2 font-light text-xs">
            <p className="col-span-3">Company Name</p>
            <p className="col-span-1 text-nowrap">Swift Logix</p>
            <p className="col-span-3">Shipping Date </p>
            <p className="col-span-1">11.02.2025</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">Packaging Type</p>
          <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-4 gap-4 font-light text-xs">
            <p className="col-span-3">Type</p>
            <p className="col-span-1 text-nowrap">Box Packaging</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl ">
          {" "}
          <p className="font-bold text-base">Goods Type</p>
          <p className="font-light text-xs grid">
            Electronics & Appliances <span>(Mobiles Phones,Laptops,TVs)</span>
          </p>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">Packaging Details</p>
          <div className="grid  grid-cols-4 gap-2 font-light text-xs">
            <p className="col-span-3">No of Package</p>
            <p className="col-span-1">2</p>
            <p className="col-span-3">Packaging Weight </p>
            <p className="col-span-1  text-nowrap">40 kg/box</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 lg:row-span-2 md:row-span-1 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">From Location</p>
          <div className="grid grid-cols-4  gap-2 font-light text-xs">
            <p className="col-span-3">Street</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-3">landmark</p>
            <p className="col-span-1">#23456</p>
            <p className="col-span-3">City</p>
            <p className="col-span-1">Chennai</p>
            <p className="col-span-3">State</p>
            <p className="col-span-1">Tamilnadu</p>
            <p className="col-span-3">Country</p>
            <p className="col-span-1">India</p>
            <p className="col-span-3">Pincode</p>
            <p className="col-span-1">600096</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white lg:row-span-2 md:row-span-1 rounded-2xl">
          <p className="font-bold text-base">To location</p>
          <div className="grid  grid-cols-4 gap-2 font-light text-xs">
            <p className="col-span-3">Street</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-3">landmark</p>
            <p className="col-span-1">#23456</p>
            <p className="col-span-3">City</p>
            <p className="col-span-1">Chennai</p>
            <p className="col-span-3">State</p>
            <p className="col-span-1">Tamilnadu</p>
            <p className="col-span-3">Country</p>
            <p className="col-span-1">India</p>
            <p className="col-span-3">Pincode</p>
            <p className="col-span-1">600096</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white lg:row-span-2 md:row-span-1  rounded-2xl">
          <p className="font-bold text-base">Vehicle Details</p>
          <div className="grid grid-cols-4 gap-2 font-light text-xs">
            <p className="col-span-3">Vehicle Type</p>
            <p className="col-span-1">Truck</p>
            <p className="col-span-3">Vehicle Model</p>
            <p className="col-span-1">#23456</p>
            <p className="col-span-3">Vehicle Owner</p>
            <p className="col-span-1">Name</p>
            <p className="col-span-3">Owner Phone</p>
            <p className="col-span-1">8974561032</p>
            <p className="col-span-3">Vehicle Number</p>
            <p className="col-span-1">1234</p>
            <p className="col-span-3">RC Number</p>
            <p className="col-span-1">54678</p>
            <p className="col-span-3">Insurance</p>
            <p className="col-span-1">5467</p>
            <p className="col-span-3">Permit</p>
            <p className="col-span-1">575</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white   rounded-2xl">
          <p className="font-bold text-base">Customer Details</p>
          <div className="grid lg:grid-cols-5 grid-cols-4 gap-2 font-light text-xs">
            <p className="col-span-3">Name</p>
            <p className="col-span-1 ">Cheval</p>
            <p className="col-span-3">Phone Number</p>
            <p className="col-span-1 text-nowrap">9854761203</p>
          </div>
        </div>
        <div className="md:order-1  lg:col-span-9 md:col-span-12 col-span-12 grid grid-cols-12 p-6 space-y-4 gap-6 dark:bg-darkgray bg-white   rounded-2xl">
          <div className="col-span-6">
            <p className="font-bold text-base mb-2">Driver Details</p>
            <div className="grid grid-cols-5 gap-4 font-light text-xs">
              <p className="col-span-3">Driver Name</p>
              <p className="col-span-1 text-nowrap">Name</p>
              <p className="col-span-3">Phone Number</p>
              <p className="col-span-1">#2025</p>
              <p className="col-span-3">License</p>
              <p className="col-span-1">#20</p>
              <p className="col-span-3">Experience</p>
              <p className="col-span-1">20</p>
              <p className="col-span-3 mt-1">Ratings</p>
              <p className="col-span-1 mx-6 mb-1">
                <StarProgress rating={3} />
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <p className="font-bold text-base mb-2">Address</p>
            <div className="grid grid-cols-5 gap-3 font-light text-xs">
              <p className="col-span-3">Landmark</p>
              <p className="col-span-1 text-nowrap">Name</p>
              <p className="col-span-3">City</p>
              <p className="col-span-1 text-nowrap">Name</p>
              <p className="col-span-3">State</p>
              <p className="col-span-1 text-nowrap">Name</p>
              <p className="col-span-3">Country</p>
              <p className="col-span-1 text-nowrap">Name</p>
              <p className="col-span-3">Pincode</p>
              <p className="col-span-1 text-nowrap">00000</p>
            </div>
          </div>
        </div>
        <div className="lg:order-2 md:order-0  lg:col-span-3 md:col-span-6 col-span-12 p-6 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="font-bold text-base">Payment Details</p>
          <div className="grid grid-cols-4 gap-4 font-light text-xs">
            <p className="col-span-3">Advance Payment</p>
            <p className="col-span-1">₹3647</p>
            <p className="col-span-3">Balance Payment</p>
            <p className="col-span-1">₹3647</p>
            <p className="col-span-3">Total Payment</p>
            <p className="col-span-1">₹3647</p>
          </div>
        </div>
        <div className="md:order-2 order-2 col-span-12 p-8 space-y-4 dark:bg-darkgray bg-white    rounded-2xl">
          <p className="flex justify-between font-bold text-base">
            Description{" "}
            <span
              onClick={handleViewParagraph}
              className=" cursor-pointer underline underline-offset-4"
            >
              View More
            </span>
          </p>

          <p className="text-sm font-extralight  leading-relaxed tracking-wide">
            The Vehicle Detailed Description section provides a comprehensive
            overview of each vehicle's key details, ensuring efficient
            management and tracking. The Vehicle Overview section displays
            fundamental details such as type, model, and registration number,
            while the Vehicle Identification section includes the RC number,
            license plate, and owner details. To monitor real-time usage, the
            Current Status highlights whether the vehicle is available, on trip,
            or under maintenance, along with an Operational Condition report
            that includes last service dates and upcoming maintenance schedules.
            Additionally, the Vehicle Availability status ensures quick
            assignment decisions.
          </p>
          {viewMore && (
            <div className="space-y-4">
              <p>
                {" "}
                For compliance and ownership tracking, the Owner Information
                section provides details about the owner’s name, contact, and
                company, whereas the Registration & Compliance section lists the
                RC number, insurance validity, and permits. The Legal &
                Insurance Details ensure all necessary documents are up to date
                for uninterrupted operations. To track usage patterns, the
                Recent Trips section logs past bookings, and the Activity &
                Assignment History provides insights into previous assignments
                and current driver details. The Usage Statistics summarize
                distance traveled, trip frequency, and efficiency.
              </p>{" "}
              <p>
                {" "}
                Maintenance tracking is streamlined with the Maintenance Logs,
                which document last service dates and reported issues, while the
                Repair & Inspection History keeps records of previous repairs.
                The Fuel & Performance Tracking section helps monitor mileage
                and fuel efficiency. For driver and booking management, the
                Assigned Driver Details provide driver name, contact, and
                ratings, while the Booking & Dispatch Information displays
                previous bookings and upcoming schedules. Lastly, the Vehicle
                Utilization Summary offers insights into how frequently the
                vehicle is used, helping in optimizing resource allocation. This
                structured approach ensures transparency, operational
                efficiency, and effective vehicle management.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Viewbooking;
