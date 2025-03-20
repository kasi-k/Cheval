import React from "react";
import NavBar from "../../components/NavBar";
import Logo from "../../assets/Cheval Logo.png";

const ConsignmentNote = () => {
  return (
    <>
      <NavBar title="Booking" pagetitle="View Challan" />
      <div className="font-roboto-flex flex items-center justify-center py-4">
        <div className="bg-white text-black w-[630px]  shadow-lg border-2 border-black rounded-sm">
          <div className="flex items-center justify-evenly py-4">
            <div className="w-48">
              <img src={Logo} alt="Cheval" />
            </div>
            <div className="">
              <h1 className="font-bold text-xl">Booking Company Name</h1>
              <p className="text-sm">Booking company address</p>
              <p className="text-sm">Website</p>
              <p className="text-sm">Email</p>
              <p className="text-sm">Phone</p>
            </div>
          </div>
          <p className="text-center font-bold text-lg border-y-2 border-black py-1">
            CONSIGNMENT NOTE
          </p>
          <div className="grid grid-cols-2 divide-x-2  text-sm">
            <div className="divide-y-2 text-base">
              <div className="p-4 ">
                <strong>Consignor:</strong>
                <p>Consignor Name</p>
                <p>Address</p>
                <p>Contact Person</p>
                <p>Contact Number</p>
                <p>GSTIN</p>
              </div>
              <div className="p-4">
                <strong>Consignee:</strong>
                <p>Consignee Name</p>
                <p>Address </p>
                <p>Contact Person </p>
                <p>Contact Number </p>
                <p>GSTIN</p>
              </div>
              <div className="p-4 ">
                <strong>Buyer Other than Consignee:</strong>
                <p>Consignee Name </p>
                <p>Address</p>
                <p>Contact Person </p>
                <p>Contact Number</p>
                <p>GSTIN</p>
              </div>
            </div>
            <div className="divide-y-2 text-sm font-semibold">
              <div className="p-2 space-y-1">
                <p>LR #:</p>
                <p>Date:</p>
                <p>From:</p>
                <p>To:</p>
                <p>Booking Office:</p>
              </div>
              <div className="p-2 space-y-1">
                <p>Vehicle No:</p>
                <p>Vehicle Type:</p>
                <p>Mode of Booking:</p>
                <p>Mode of Freight:</p>
                <p>Insurance:</p>
              </div>
              <div className="p-2 space-y-1 border-b-2">
                <p>Invoice #:</p>
                <p>Volume:</p>
                <p>Invoice Value:</p>
                <p>Destination No:</p>
                <p>Owner Risk:</p>
              </div>
            </div>
          </div>
          <div className="h-fit">
            <table className="table-auto w-full text-sm ">
              <thead className="border-y-2 border-black">
                <tr>
                  {[
                    "SR",
                    "No of Packages",
                    "Types Of Packing",
                    "Description",
                  ].map((head) => (
                    <th key={head} className="border-r-2 px-2 py-1">
                      {head}
                    </th>
                  ))}
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-y-2 border-black text-center">
                  <td className=" px-2 h-20"></td>
                  <td className="border-2  "></td>
                  <td className="border-2  "></td>
                  <td className="border-2   "></td>
                  <td></td>
                </tr>
                <tr className="border-y-2 border-black text-center">
                  <td className=" px-2 py-2.5"></td>
                  <td className="border-2  "></td>
                  <td className="border-2  "></td>
                  <td className="border-2   "></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-5 text-xs">
            <div className="col-span-3 border-r-2 border-black">
              <p className="border-b-2 border-black p-1">
                <p className="text-sm font-semibold">GSTIN:</p>
              </p>
              <p className="p-1">
                GSTIN Transactions Covered Under Reverse Charge SAC - 996791.
                Goods booked & carried subject to conditions overleaf.
              </p>
            </div>

            <div className=" flex justify-center items-end border-r-2 border-black p-1">
              Consignor Sign
            </div>

            <div className=" grid row-span-2">
              <p className="p-2">For Booking Company Name</p>
              <div className="grid items-end justify-center py-1">
                Booking Executive
              </div>
            </div>

            <div className="col-span-3 border-t-2 border-r-2 border-black p-2 h-20">
              Booking Company Registered Address
            </div>

            <div className=" flex justify-center items-end border-t-2 border-r-2 border-black py-1">
              Consignee Sign
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsignmentNote;
