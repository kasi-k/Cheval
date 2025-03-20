import React from "react";
import NavBar from "../../components/NavBar";
import Logo from "../../assets/Cheval Logo.png";

const ConsignmentNote = () => {
  return (
    <>
      <NavBar title="Booking" pagetitle="View Challan" />
      <div className=" flex items-center justify-center">
        <div className="bg-white text-black w-[620px]  rounded-lg shadow-lg border border-cyan-400">
          {/* Header */}

          <div className="flex items-center justify-evenly py-2">
            <div className="w-60">
              <img src={Logo} alt="Cheval Image" />
            </div>
            <div>
              <h1 className="font-bold text-xl">Booking Company Name</h1>
              <p className="text-sm">Booking company address</p>
              <p className="text-sm">Website</p>
              <p className="text-sm">Email</p>
              <p className="text-sm">Phone</p>
            </div>
          </div>

          {/* Title */}
          <div className="text-center font-bold text-lg border border-black ">
            CONSIGNMENT NOTE
          </div>

          {/* Main Info Section */}
          <div className="grid grid-cols-2">
            {/* Left Side */}
            <div className=" border border-black  space-y-2 text-sm">
              <div className="border-b-2 border-black p-2">
                <strong>Consignor:</strong>
                <br />
                Consignor Name
                <br />
                Address
                <br />
                Contact Person
                <br />
                Contact Number
                <br />
                GSTIN
              </div>
              <div className="border-b-2 border-black p-2">
                <strong>Consignee:</strong>
                <br />
                Consignee Name
                <br />
                Address
                <br />
                Contact Person
                <br />
                Contact Number
                <br />
                GSTIN
              </div>
              <div className="border-b border-black p-2">
                <strong>Buyer Other than Consignee:</strong>
                <br />
                Consignee Name
                <br />
                Address
                <br />
                Contact Person
                <br />
                Contact Number
                <br />
                GSTIN
              </div>
            </div>

            {/* Right Side */}
            <div className="  space-y-2 text-sm">
              <div className="border-b-2 border-black p-2">
                <div>
                  <strong>LR #:</strong>
                </div>
                <div>
                  <strong>Date:</strong>
                </div>
                <div>
                  <strong>From:</strong>
                </div>
                <div>
                  <strong>To:</strong>
                </div>
                <div>
                  <strong>Booking Office:</strong>
                </div>
              </div>

              <div className="border-b-2 border-black p-2">
                <div>
                  <strong>Vehicle No:</strong>
                </div>
                <div>
                  <strong>Vehicle Type:</strong>
                </div>
                <div>
                  <strong>Mode of Booking:</strong>
                </div>
                <div>
                  <strong>Mode of Freight:</strong>
                </div>
                <div>
                  <strong>Insurance:</strong>
                </div>
              </div>

              <div className="border-b-2 border-black p-2">
                <div>
                  <strong>Invoice #:</strong>
                </div>
                <div>
                  <strong>Volume:</strong>
                </div>
                <div>
                  <strong>Invoice Value:</strong>
                </div>
                <div>
                  <strong>Destination No:</strong>
                </div>
                <div>
                  <strong>Owner Risk:</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="border border-black mb-4">
            <div className="grid grid-cols-5 text-center font-bold text-sm border-b border-black">
              <div className="border-r border-black ">SR</div>
              <div className="border-r border-black">No of Packages</div>
              <div className="border-r border-black ">Types Of Packing</div>
              <div className="border-r border-black ">Description</div>
              <div className="">Weight</div>
            </div>
            <div className="h-fit">
              {/* Empty Rows or Loop Through Data Here */}
            </div>
          </div>

          {/* Footer Section */}
          <div className="grid grid-cols-3 text-xs mb-4">
            <div className="border border-black ">
              <div className="border-b px-1">
                <strong>GSTIN:</strong>
              </div>
              <p className="p-1">
              GSTIN Transactions Covered Under Reverse Charge SAC - 996791
              Subject to Pune Jurisdiction only Goods booked & carried subject
              to conditions overleaf
              </p>
            </div>

            <div className="border border-black p-2 flex justify-between items-end">
              <div>
                <div className="mb-12">Consignor Sign</div>
                <div className="text-sm">
                  Booking Company registered address
                </div>
              </div>
              <div>
                <div className="mb-12">Consignee Sign</div>
                <div className="text-sm">Booking Executive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsignmentNote;
